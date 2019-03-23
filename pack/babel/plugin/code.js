// @pipeline
const { a1 } = test;
// @pipeline-next-line-disabled
const { a2: b2 } = test;
const { a3 = 'xxx' } = test;
const { a4: b4 = 'xxx' } = test; // @pipeline-line-disabled
// const { a: { b: { c } } } = test;
// const { a: { b = 'xxx' } } = test;
// const { a: { b } = c } = test;
// const { a: { b } = {} } = test;
// let { a = 'b', b = 'c' } = _test;
// const { a: { b } = c } = test;
// const test = {};
// const { c = 'xxx', ...b } = test;
// const { a = 'xxx' | 'aaa' | 'bbb' | 'ccc' | 'ddd' | 'eee', ...d } = test;