const template = require('babel-template');
const { types: t } = require("@babel/core");
const gen = require('babel-generator').default;
// const test = template(`NAME || {}`);

const filterFn = {
  toUpperCase: template(`
    var upperCase = JSON.stringify(STRING),
  `)
};

class PipelineTransformer {
  constructor(opts) {
    this.nodes = opts.nodes || [];
    this.kind = opts.kind;
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
    const objProps = [];
    for (let i = 0; i < propLen; i++) {
      const property = properties[i];
      const { key, value } = property;
      if (t.isAssignmentPattern(value)) {
        // this.pushAssignmentPattern(value, patternInit);
        objProps.push(t.cloneNode(property));
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
    const initExpression = t.logicalExpression('||', patternInit, t.objectExpression([]));
    this.nodes.push(t.VariableDeclarator(t.objectPattern(objProps), initExpression));
  }

  pushArrayPattern(pattern, patternInit) {
    const initExpression = t.logicalExpression('||', patternInit, t.arrayExpression([]));
    this.nodes.push(t.VariableDeclarator(pattern, initExpression));
  }

  reverseNodes() {
    this.nodes.reverse();
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
            const { node } = path;
            if (node._filterPluginPassed) return;
            const declarLen = node.declarations.length;
            const nodeKind = node.kind;
            const nodes = [];
            let declar;
            for (let i = 0; i < declarLen; i++) {
              declar = node.declarations[i];
              const pattern = declar.id;
              if (t.isPattern(pattern)) {
                const patternInit = declar.init;
                const pipeline = new PipelineTransformer({
                  nodes,
                  kind: nodeKind,
                  pattern,
                  patternInit,
                });
                pipeline.reverseNodes();
              } else {
                // TODO: no pattern
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

const myVisitor = {
  // AssignmentPattern(path) {
  //   path.remove();
  // },
  BinaryExpression(path) {
    const name = path.node.right.name;
    // console.log(filterFn[name]({
    //   STRING: t.identifier('xxx'),
    // }));
  }
}

// const objProp = t.objectProperty(t.identifier('a'), t.identifier('a'), false, true);
// const obj = t.objectPattern([objProp]);
