const template = require('babel-template');
const { types: t } = require("@babel/core");
const gen = require('babel-generator').default;
// const test = template(`NAME || {}`);

const filterFn = template(`
  var IMPROT_NAME = String.prototype.toUpperCase.call(SOURCE);
`);

class PipelineTransformer {
  constructor(opts) {
    this.nodes = opts.nodes || [];
    this.kind = opts.kind;
    this.path = opts.path;
    const { scope } = opts.path;
    this.scope = scope;
    const pattern = t.cloneNode(opts.pattern);
    const patternInit = t.cloneNode(opts.patternInit);
    this.init(pattern, patternInit, true);
  }

  init(pattern, patternInit) {
    if (t.isObjectPattern(pattern)) {
      this.pushObjectPattern(pattern, patternInit);
    }
    if (t.isArrayPattern(pattern)) {
      this.pushArrayPattern(pattern, patternInit);
    }
    // if (t.isAssignmentPattern(pattern)) {
      // this.pushAssignmentPattern(pattern, patternInit);
    // }
  }

  pushObjectPattern(pattern, patternInit = null) {
    const { properties } = pattern;
    const propLen = properties.length;
    if (propLen < 1) {
      this.nodes.push(t.VariableDeclarator(pattern, patternInit));
      return;
    }
    let objProps = [];
    for (let i = 0; i < propLen; i++) {
      const property = properties[i];
      const { key, value } = property;
      if (t.isAssignmentPattern(value)) {
        this.pushAssignmentPattern(property, objProps);
        // objProps.push(t.cloneNode(property));
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
      const { left, right } = patternRight;
      const temp = this.scope.generateUidIdentifierBasedOnNode(patternLeft);
      // objProp.push(t.buildVariableDeclaration(temp, patternLeft));
      // const ast = filterFn({
      //   IMPORT_NAME: patternLeft,
      //   SOURCE: temp,
      // });
      console.log(right.value);
      this.nodes.push(t.VariableDeclarator(patternLeft, temp));
      const assignPattern = t.assignmentPattern(temp, left);
      const objProp = t.objectProperty(key, assignPattern, false, false);
      objProps.push(objProp);
    } else {
      objProps.push(t.cloneNode(property));
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
  const filterRegexp = /@filter\b/g;
  return {
    visitor: {
      Program(path) {
        if (!filterRegexp.test(this.file.ast.comments[0].value.trim())) {
          return;
        }
        path.traverse({
          VariableDeclaration(path) {
          // path.insertAfter(t.expressionStatement(t.stringLiteral('before')));

            // const { node } = path;
            // if (node._filterPluginPassed) return;
            // const declarLen = node.declarations.length;
            // const nodeKind = node.kind;
            // const nodes = [];
            // let declar;
            // for (let i = 0; i < declarLen; i++) {
            //   declar = node.declarations[i];
            //   const pattern = declar.id;
            //   const patternInit = declar.init;
            //   if (t.isPattern(pattern)) {
            //     const pipeline = new PipelineTransformer({
            //       path,
            //       nodes,
            //       kind: nodeKind,
            //       pattern,
            //       patternInit,
            //     });
            //     pipeline.reverseNodes();
            //   } else {
            //     nodes.push(t.cloneNode(declar));
            //   }
            // }
            // const nodeOut = t.VariableDeclaration(nodeKind, nodes);
            // nodeOut._filterPluginPassed = true;
            // path.replaceWith(nodeOut);
          },
        });
      },
    }
  };
}

// const objProp = t.objectProperty(t.identifier('a'), t.identifier('a'), false, true);
// const obj = t.objectPattern([objProp]);
