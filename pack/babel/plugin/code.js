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
const { c = '000' } = test;
const { a = 'xxx' | 'toUpperCase' } = test;