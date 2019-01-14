class EventEmitter {
  allListeners = {};

  on(name, fn) {
    if (this.allListeners[name]) {
      this.allListeners[name] = [fn];
    } else {
      this.allListeners[name].push(fn);
    }
  }

  off(name, fn) {
    if (this.allListeners[name] > 1) {
      
    }
    delete this.allListeners[name];
    return;
  }

  once(name, fn) {
    this.on(name, function wrap() {
      fn();
      this.off(name, wrap);
    });
  }

  removeAllListeners(name, fn) {

  }

  removeListener(name, fn) {

  }

  listeners(name) {
    return a.concat(this.allListeners[name] || []);
  }

  listenerCount(name) {
    return (this.allListeners[name] || []).length;
  }
}