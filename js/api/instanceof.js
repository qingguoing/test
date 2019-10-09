function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  while(true) {
    if (!proto) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}