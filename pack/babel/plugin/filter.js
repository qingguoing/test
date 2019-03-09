const template = require('babel-template');
// const { types: t } = require('babel-types');
const gen = require('babel-generator').default;
// const test = template(`NAME || {}`);

const filterFn = {
  toUpperCase: template(`
    var upperCase = JSON.stringify(STRING),
  `)
};

module.exports = function({ types: t }) {
  const filterRegexp = /@filter\b/g;
  let flag = 0;
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
            let nodeOut = null;
            for (let i = 0; i < declarLen; i++) {
              declar = node.declarations[i];
              const pattern = declar.id;
              if (t.isPattern(pattern)) {
                const patternId = declar.init;
                const initExpression = t.logicalExpression('||', t.cloneNode(patternId), t.objectExpression([]));
                nodeOut = t.VariableDeclaration(node.kind, [
                  t.VariableDeclarator(t.cloneNode(pattern), initExpression),
                ]);
                nodeOut._filterPluginPassed = true;
              }
            }
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
