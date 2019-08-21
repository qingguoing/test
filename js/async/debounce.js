function debounce(fn, delay) {
  let timerId = null;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
    timerId = setTimeout(() => fn.apply(this, args), delay);
  }
}

const a = {
  bar: 'bar',
  foo(a) {
    console.log(this.bar, a);
  }
};

const test = debounce(a.foo, 500);
new Array(100).fill(0).forEach((val, index) => {
  const i = index + 1;
  test.call({
    bar: i,
  }, i);
});
