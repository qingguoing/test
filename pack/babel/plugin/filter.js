const template = require('babel-template');
const t = require('babel-types');
const gen = require('babel-generator').default;
// const test = template(`NAME || {}`);

const filterFn = {
  toUpperCase: template(`
    var upperCase = JSON.stringify(STRING),
  `)
};

module.exports = function({ types: t }) {
  let filterFlag = false;
  const filterRegexp = /@filter\b/g;
  return {
    visitor: {
      Program() {
        if (filterRegexp.test(this.file.ast.comments[0].value.trim())) {
          filterFlag = true;
        }
      },
      ObjectPattern(path) {
        if (!filterFlag) return;
        const parent = path.parent;
        if (t.isVariableDeclarator(parent)) {
          // TODO: 多走了一次
          const initExpression = t.logicalExpression('||', parent.init, t.objectExpression([]));
          parent.init = initExpression;
          path.traverse(myVisitor);
        }
        path.replaceWith(obj);
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

const objProp = t.objectProperty(t.identifier('a'), t.identifier('a'), false, true);
const obj = t.objectPattern([objProp]);
