const babel = require("@babel/core");
const path = require('path');
const test = require('./filter');
// const destructure = require('@babel/plugin-transform-destructuring');
const destructuring = require('./destructuring-npm');
const pipeline = require('babel-plugin-pipeline');
const a = babel.transformFileSync(path.join(__dirname, 'code.js'), {
  // plugins: [destructuring, test],
  // plugins: [test]
  // plugins: [pipeline],
  // plugins: [destructuring]
});

console.log(a.code);