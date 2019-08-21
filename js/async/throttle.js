function throttle(fn, gap) {
  let intervalId = null;
  let callArgs = null;
  let context = this;
  return function (...args) {
    context = this;
    callArgs = args;

    if (!intervalId) {
      fn.apply(context, callArgs);
      callArgs = null;

      intervalId = setInterval(() => {
        if (callArgs) {
          fn.apply(context, callArgs);
          callArgs = null;
        } else {
          clearInterval(intervalId);
          intervalId = null;
        };
      });
    }
  }
}

const a = {
  bar: 'bar',
  foo(a) {
    console.log(this.bar, a);
  }
};

const test = throttle(a.foo, 500);
new Array(100).fill(0).forEach((val, index) => {
  const i = index + 1;
  test.call({
    bar: i,
  }, i);
});