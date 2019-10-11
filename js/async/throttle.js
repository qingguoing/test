function throttle1(fn, gap) {
  let initCall = false;
  let callArgs = null;
  let context = this;
  return function (...args) {
    context = this;
    callArgs = args;

    if (!initCall) {
      fn.apply(context, callArgs);
      callArgs = null;
      initCall = true;
      let intervalId = setInterval(() => {
        if (callArgs) {
          fn.apply(context, callArgs);
          callArgs = null;
        } else {
          clearInterval(intervalId);
          intervalId = null;
        };
      }, gap);
    }
  }
}

const throttle2 = (fn, wait) => {
  let inThrottle, lastFn, lastTime;
  return function(...args) {
    const context = this;
      // args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function() {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

const a = {
  bar: 'bar',
  foo(a) {
    console.log(this.bar, a);
  }
};

const test = throttle2(a.foo, 500);
new Array(100).fill(0).forEach((val, index) => {
  const i = index + 1;
  setTimeout(() => {
    test.call({
      bar: i,
    }, i);
  }, i * 100);
});