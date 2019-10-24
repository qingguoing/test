Function.prototype.myBind = function(context = null, ...args) {
  let fn = this;
  return fBound(...extraArgs) {
    return fn.apply(this instanceof fBound ? this : context, [...args, ...extraArgs]);
  };
  fBound.prototype = Object.create(fn.prototype);
}