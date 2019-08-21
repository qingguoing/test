function takeLatest(fn) {
  let currentOrder = -1;
  return function (...args) {
    const callOrder = ++currentOrder;
    const promise = fn.apply(this, args);
    if (!promise || !promise.then) {
      throw new Error('返回结果必须是一个 promise');
    }
    return new Promise((resolve, reject) => {
      // TODO: redux-saga 如何取消其他请求
      if (callOrder === currentOrder) {
        promise.then(
          res => resolve(res),
          err => reject(err),
        );
      }
    });
  }
}