
Function.prototype.myCall = function(context, ...args) {
  const fn = this;
  const symbol = Symbol('fn');
  context[symbol] = fn;
  const res = context[symbol](...args);
  delete context[symbol];
  return res;
}