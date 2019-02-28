const template = require('babel-template');
const generate = require('babel-generator').default;
const t = require('babel-types');

const test = template(`
  var IMPORT_NAME = require(SOURCE);
`);

const ast = test({
  IMPORT_NAME: t.identifier('my'),
  SOURCE: t.stringLiteral('xxx')
});

// const objProp = t.objectProperty(t.identifier('a'), t.identifier('a'), false, true);
// const obj = t.objectPattern([objProp]);

const obj = t.blockStatement([]);
console.log(generate(obj).code);