// @filter
// const { a } = test;
// const { a: b } = test;
// const { a = 'xxx' } = test;
// const { a: b = 'xxx' } = test;
// const { a: { b: { c } } } = test;
// const { a: { b = 'xxx' } } = test;
// const { a: { b } = c } = test;
// const { a: { b } = {} } = test;
// let { a = 'b', b = 'c' } = _test;
// const { a: { b } = c } = test;
const test = {};
const { c = 'xxx' | 'String.prototype.toUpperCase.call' } = test;
const { a = 'xxx' | 'aaa' | 'bbb' | 'ccc' | 'ddd' | 'eee' } = test;