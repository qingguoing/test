const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class P {
  constructor(fn) {
    if(typeof fn !== 'function') {
      throw new Error('fn in not a function');
    }
    this._status = PENDING;
    this._value = undefined;
    this._fulfilledListenerQueue = [];
    this._rejectedListenerQueue = [];
    try {
      // this 需要绑定
      fn(this._resolve.bind(this), this._reject.bind(this));
    } catch(err) {
      this._reject(err);
    }
  }

  // setTimeout 应该放在此处，所有修改状态的 Promise 全部改成异步调用
  _resolve(res) {
    const run = () => {
      if (this._status !== PENDING) return;

      const runFulfilled = (ret) => {
        this._status = FULFILLED;
        this._value = ret;
        while (fn = this._fulfilledListenerQueue.shift()) {
          fn(res);
        }
      };
      const runRejected = (err) => {
        this._status = REJECTED;
        this._value = err;
        while( fn = this._rejectedListenerQueue.shift()) {
          fn(err);
        }
      };
      if (res instanceof P) {
        // 是 P 的话，当前的状态由 P 的状态决定
        res.then(runFulfilled, runRejected);
      } else {
        runFulfilled(res);
      }
    }

    setTimeout(run, 0);
  }

  reject(err) {
    if (this.status !== PENDING) {
      return;
    }
    const run = () => {
      this._status = REJECTED;
      this._value = err;
      while(fn = this._rejectedListenerQueue.shift()) {
        fn(err);
      }
    }
    setTimeout(run, 0);
  }

  then(fulfilledFn, rejectedFn) {
    const { _status, _value } = this;
    return new P((nextFulfilledFn, nextRejectedFn) => {
      const resolve = (value) => {
        try {
          if (typeof fulfilledFn === 'function') {
            const ret = fulfilledFn(value);
            if (ret instanceof P) {
              ret.then(nextFulfilledFn, nextRejectedFn);
            } else {
              nextFulfilledFn(ret);
            }
          } else {
            nextFulfilledFn(value);
          }
        } catch (err) {
          nextRejectedFn(err);
        }
      };
      const reject = (error) => {
        try {
          if (typeof rejectedFn === 'function') {
            const ret = rejectedFn(error);
            if (ret instanceof P) {
              ret.then(nextFulfilledFn, nextRejectedFn);
            } else {
              // 接下来的 promise 状态改变
              nextFulfilledFn(ret);
            }
          } else {
            nextRejectedFn(error);
          }
        } catch (err) {
          nextRejectedFn(err);
        }
      };
      switch(_status) {
        case PENDING:
          this.fulfilledListeners.push(resolve);
          this.rejectedListeners.push(reject);
          break;
        case FULFILLED:
          resolve(_value);
          break;
        case REJECTED:
          reject(_value);
          break;
      }
    });
  }

  catch(fn) {
    this.then(undefined, fn);
  }

  static resolve(res) {
    // if 判断
    if (res instanceof P) return res;
    return new P(resolve => resolve(res));
  }

  static reject(err) {
    return new P((resolve, reject) => reject(err));
  }

  static all(...fns) {
    let len = fns.length;
    const ret = [];
    // ret 值得顺序要对应
    return new P((resolve, reject) => {
      for (let [i, fn] of fns) {
        // 包成 P 实例
        this.resolve(fn).then(
          (res) => {
            len--;
            ret[i] = res;
            if (!len) resolve(ret);
          },
          (err) => reject(err),
        );
      }
    });
  }

  static race(...fns) {
    return new P((resolve, reject) => {
      for (let fn of fns) {
        this.resolve(fn).then(
          ret => resolve(ret),
          err => reject(err),
        );
      }
    });
  }
}
