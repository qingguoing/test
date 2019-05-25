class EventEmitter {
  constructor() {
    this.allListeners = {};
  }

  on(name, fn) {
    if (!this.allListeners[name]) {
      this.allListeners[name] = [fn];
    } else {
      this.allListeners[name].push(fn);
    }
    return this;
  }

  off(name, fn) {
    if(fn) {
      if (!this.allListeners[name]) return;
      const index = this.allListeners[name].indexOf(fn);
      this.allListeners[name].splice(index, 1);
    } else {
      delete this.allListeners[name];
    }
    return this;
  }

  once(name, fn) {
    const that = this;
    let res, flag = false;
    this.on(name, function wrap(...args) {
      if (flag) {
        return res;
      }
      flag = true;
      res = fn(...args);
      // that.off(name, wrap);
    });
    return this;
  }

  removeAllListeners() {
    this.allListeners = {};
    return this;
  }

  listenerCount(name) {
    const len = (this.allListeners[name] || []).length;
    console.log(len);
    return len;
  }

  emit(name, ...args) {
    const listenerArr = this.allListeners[name] || [];
    if (listenerArr.length > 0) {
      listenerArr.forEach((listener) => {
        listener.call(this, ...args);
      });
    }
    return this;
  }
}

const test = new EventEmitter();
function a(args) {
  console.log('once|app', args);
}
test.once('once|app', a).off('once|app').emit('once|app', 'xxx').emit('once|app', 'yyy')
.once('once2|app', function b(args) {
  console.log('once2|app', args)
}).emit('once2|app', 'xxx').emit('once2|app', 'yyy').removeAllListeners().listenerCount('once|app');
