const myCreate = function(proto) {
  function F() {}
  F.prototype = proto;
  F.prototype.constructor = F;
  return new F();
}