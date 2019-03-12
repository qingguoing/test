// @filter
// const { a } = test;
// const { a: b } = test;
// const { a = 'xxx' } = test;
// const { a: b = 'xxx' } = test;
// const { a: { b: { c } } } = test;
// const { a: { b = 'xxx' } } = test;
// const { a: { b } = c } = test;
// const { a: { b } = {} } = test;
// const { a = 'b', b = 'c' } = test;
// const { a: { b } = c } = test;

const test = {};
function x() {
  const { test } = a;
}
const a = 'x';