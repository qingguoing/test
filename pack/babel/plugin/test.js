const { a, b, a: { c } } = { a: { c: 'xxx' }, b: 'yyy'};
console.log(a, b, c);