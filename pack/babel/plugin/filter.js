const { types: t } = require("@babel/core");

const enableFileRegexp = /@pipeline\b/g;
const disableNextLineRegexp = /@pipeline-next-line-disabled\b/g;
const disableLineRegexp = /@pipeline-line-disabled\b/g;

function variableDeclarationHasPattern(node) {
  for (const declar of node.declarations) {
    if (t.isPattern(declar.id)) {
      return true;
    }
  }
  return false;
}

class PipelineTransformer {
  constructor(opts) {
    this.nodes = opts.nodes || [];
    this.kind = opts.kind;
    this.path = opts.path;
    const { scope } = opts.path;
    this.scope = scope;
    const pattern = t.cloneNode(opts.pattern);
    const patternInit = t.cloneNode(opts.patternInit);
    this.init(pattern, patternInit);
  }

  init(pattern, patternInit) {
    if (t.isObjectPattern(pattern)) {
      this.pushObjectPattern(pattern, patternInit);
    }
    if (t.isArrayPattern(pattern)) {
      this.pushArrayPattern(pattern, patternInit);
    }
  }

  pushObjectPattern(pattern, patternInit = null) {
    const { properties } = pattern;
    const propLen = properties.length;
    if (propLen < 1) {
      this.nodes.push(t.VariableDeclarator(pattern, patternInit));
      return;
    }
    let objProps = [];
    let restElement = null;
    for (let i = 0; i < propLen; i++) {
      const property = properties[i];
      if (t.isRestElement(property)) {
        restElement = property;
        continue;
      }
      const { key, value } = property;
      if (t.isAssignmentPattern(value)) {
        this.pushAssignmentPattern(property, objProps);
        continue;
      }
      if (t.isPattern(value)) {
        this.init(value, key);
      }
      if (t.isIdentifier(value) && key.name !== value.name) {
        const patternKey = t.cloneNode(key);
        const patternValue = t.cloneNode(value);
        objProps.push(t.objectProperty(patternKey, patternValue, false, false));
      } else {
        const patternKey = t.cloneNode(key);
        objProps.push(t.objectProperty(patternKey, patternKey, false, true));
      }
    }
    objProps = this.deduplicateArrOfObjectProperty(objProps);
    let initExpression = patternInit;
    if (t.isIdentifier(patternInit)) {
      initExpression = t.logicalExpression('||', patternInit, t.objectExpression([]));
    }
    if (restElement) {
      objProps.push(restElement);
    }
    this.nodes.push(t.VariableDeclarator(t.objectPattern(objProps), initExpression));
  }

  pushArrayPattern(pattern, patternInit) {
    const initExpression = t.logicalExpression('||', patternInit, t.arrayExpression([]));
    this.nodes.push(t.VariableDeclarator(pattern, initExpression));
  }

  pushAssignmentPattern(property, objProps) {
    const { key, value } = property;
    const { left: patternLeft, right: patternRight } = value;
    if (t.isBinaryExpression(patternRight)) {
      const temp = this.scope.generateUidIdentifierBasedOnNode(patternLeft);
      this.filterFnArr = [];
      const defaultValue = this.pushBinaryExpression(patternRight);
      this.handleFilterFun(patternLeft, temp);
      const assignPattern = t.assignmentPattern(temp, defaultValue);
      const objProp = t.objectProperty(key, assignPattern, false, false);
      objProps.push(objProp);
    } else {
      objProps.push(t.cloneNode(property));
    }
  }

  pushBinaryExpression(patternRight) {
    const { left, right } = patternRight;
    this.filterFnArr.push(right.value);
    if (t.isBinaryExpression(left)) {
      return this.pushBinaryExpression(left);
    }
    return left;
  }

  handleFilterFun(origin, temp) {
    const len = this.filterFnArr.length;
    let tempCenter = origin;
    let tempParam = temp;
    for (let i = 0; i < len; i++) {
      const filterFn = this.filterFnArr[i];
      const fnArr = filterFn.split(' ');
      const fnName = fnArr.shift();
      const fnParams = fnArr.map(str => t.stringLiteral(str));
      tempParam = i === len - 1 ? temp : this.scope.generateUidIdentifierBasedOnNode(tempParam);
      const fun = t.callExpression(t.identifier(fnName), [tempParam, ...fnParams]);
      this.nodes.push(t.VariableDeclarator(tempCenter, fun));
      tempCenter = tempParam;
      if (i === len - 1) {
        tempParam = temp;
      }
    }
  }
  
  reverseNodes() {
    this.nodes.reverse();
  }

  deduplicateArrOfObjectProperty (arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
      const { key, value } = arr[i];
      const uniquePropertyKey = this.getObjectPropertyUniqueKey(key);
      if (obj[uniquePropertyKey]) {
        if (!this.isIdentifierDuplicate(key, value)) {
          obj[uniquePropertyKey] = arr[i];
        }
      } else {
        obj[uniquePropertyKey] = arr[i];
      }
    }
    return Object.keys(obj).map(item => obj[item]);
  }

  getObjectPropertyUniqueKey(property) {
    const { type, name } = property;
    return `${type}@${name}`;
  }

  isIdentifierDuplicate(identifierA, identifierB) {
    const { type: typeA, name: nameA } = identifierA;
    const { type: typeB, name: nameB } = identifierB;
    return typeA === typeB && nameA === nameB;
  }
}

module.exports = function({ types: t }) {
  return {
    visitor: {
      Program(path) {
        let { value = '' } = this.file.ast.comments[0] || {};
        value = value.trim();
        if (!enableFileRegexp.test(value)) {
          return;
        }
        path.traverse({
          VariableDeclaration(path) {
            const { node, parent } = path;
            if (t.isForXStatement(parent)) return;
            if (!variableDeclarationHasPattern(node)) return;
            if (node._filterPluginPassed) return;
            for (let i = 0; i < (node.leadingComments || []).length; i++) {
              const { value = '' } = node.leadingComments[i];
              if (disableNextLineRegexp.test(value.trim())) {
                return;
              }
            }
            for (let i = 0; i < (node.trailingComments || []).length; i++) {
              const { value = '' } = node.trailingComments[i];
              if(disableLineRegexp.test(value.trim())) {
                return;
              }
            }
            const declarLen = node.declarations.length;
            const nodeKind = node.kind;
            const nodes = [];
            let declar;
            for (let i = 0; i < declarLen; i++) {
              declar = node.declarations[i];
              const pattern = declar.id;
              const patternInit = declar.init;
              if (t.isPattern(pattern)) {
                const pipeline = new PipelineTransformer({
                  path,
                  nodes,
                  kind: nodeKind,
                  pattern,
                  patternInit,
                });
                pipeline.reverseNodes();
              } else {
                nodes.push(t.cloneNode(declar));
              }
            }
            const nodeOut = t.VariableDeclaration(nodeKind, nodes);
            nodeOut._filterPluginPassed = true;
            path.replaceWith(nodeOut);
          },
        });
      },
    }
  };
}
