const x = 'xxx';
const { a, b, a: { c } } = { a: { c: 'x'}, b: 'y'};
console.log(a, c);