class Task {
  constructor() {
    this._taskQueues = [];
  }

  add(task) {
    this._taskQueues.push(task);
    return this;
  }

  run() {
    const task = this._taskQueues.pop();
    if (task) {
      task(this.run.bind(this));
    }
  }

  stop() {

  }
}

function task1(next) {
  setTimeout(function() {
    console.log('task1');
    next();
  }, 1000);
}

function task2(next) {
  setTimeout(function() {
    console.log('task2');
    next();
  }, 1000);
}

const task = new Task();
task.add(task1).add(task2);
task.run();
