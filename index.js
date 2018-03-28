const partial = (fn, ...presetArgs) => (...laterArgs) => fn(...presetArgs, ...laterArgs);
const reverseArgs = fn => (...args) => fn(...args.reverse());

const ajax = (url, data, cb) => {};

let cacheResult = reverseArgs(
  partial(reverseArgs(ajax), function callback() {

  })
);

cacheResult('google.com', { user: id });

cacheResult = reverseArgs(
  (...laterArgs) => {
    ajax([cb, ...laterArgs].reverse())
  }
)


cacheResult = ajax([cb, laterArgs.reverse()].reverse());

cacheResult([cb, data, url].reverse());


function curry(fn,arity = fn.length) {
  return (function nextCurried(prevArgs){
      return function curried(nextArg){
          var args = [ ...prevArgs, nextArg ];

          if (args.length >= arity) {
              return fn( ...args );
          }
          else {
              return nextCurried( args );
          }
      };
  })( [] );
}

const curry = (fn, arity = fn.length, nextCurried) => (
  nextCurried = prevArgs => nextArg => {
    let args = [...prevArgs, nextArg];
    if (args.length >= arity) {
      return fn(...args);
    }
    return nextCurried(args);
  }
)([]);