const babel = require("@babel/core");
const test = require('./filter');
// const destructure = require('@babel/plugin-transform-destructuring');
const destructuring = require('./destructuring-npm');
const a = babel.transformFileSync('code.js', {
  // plugins: [test, destructure],
  // plugins: [test]
  plugins: [destructuring]
});

console.log(a.code);