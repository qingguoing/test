class EventEmitter {
  constructor() {
    this.allListeners = {};
  }

  addListener(eventName, listener, context) {
    if (this.allListeners[eventName]) {
      this.allListeners[eventName].push({
        fn: listener,
        ctx: context,
      });
    } else {
      this.allListeners[eventName] = [{
        fn: listener,
        ctx: context,
      }];
    }
    return this;
  }

  removeListener(eventName, listener) {
    const listeners = this.allListeners[eventName] || [];
    const liveListenrs = [];
    // 如果没有 listener，清空该 eventName
    if (eventName && listener) {
      // 不要用 splice，连续多次加入相同事件的清空处理
      for (let i = 0; i < listeners.length; i++) {
        if(!(listeners[i].fn === listener || listeners[i].fn._fn === listener)) {
          liveListenrs.push(listeners[i]);
        }
      }
    }

    if (liveListenrs.length > 0) {
      this.allListeners[eventName] = liveListenrs;
    } else {
      // 如果没有绑定到 eventName 的回调，delete 当前数组，防止内存泄露
      delete this.allListeners[eventName];
    }

    return this;
  }

  on(eventName, listener, context) {
    return this.addListener(eventName, listener, context);
  }

  off(eventName, listener) {
    return this.removeListener(eventName, listener);
  }

  once(eventName, listener, context) {
    const self = this;
    function once(...args) {
      // 先移出，再调用
      self.off(eventName, once);
      listener.apply(context, args);
    }
    // 保留对原有 listener 的引用，防止出现在 emit 前清空的逻辑
    once._fn = listener;
    return this.on(eventName, once, context);
  }
  
  emit(eventName, ...args) {
    // 需要 copy 一份出来，防止 once 事件的触发出现变动
    const listeners = (this.allListeners[eventName] || []).slice();
    for (let i = 0; i < listeners.length; i++) {
      const { fn, ctx } = listeners[i];
      fn.apply(ctx, args);
    }
    return this;
  }

  remove([eventName]) {
    if (eventName) {
      delete this.allListeners[eventName];
    } else {
      this.allListeners = {};
    }
  }

  eventNames() {
    return Object.keys(this.e);
  }

  getListeners(eventName) {
    const listeners = this.allListeners[eventName] || [];
    return listeners.map(item => item.fn);
  }
}

module.exports = EventEmitter;

const test = new EventEmitter();

function xxx() {
  console.log('xxx');
}

test.once('a', xxx).once('a', xxx);
test.off('a');
test.emit('a');
