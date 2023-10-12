/**
 *  实现功能：
 *  控制异步并发
 */

class Queue {
  constructor(limit) {
    this.limitCount = limit || 1;
    this.runningCount = 0;
    this.taskList = [];
  }

  run() { }

  async push(fn) {
    this.taskList.push(fn);
    this.runningCount++;
    const curTask = this.taskList.shift();
    const res = await curTask();
    console.log("🚀  res:::", res);
  }
}

const queue = new Queue(2);

const gennerateAsyncFn = (function () {
  let delay = 8;
  return function () {
    return new Promise((resolve, reject) => {
      let r = --delay;
      setTimeout(() => {
        console.log("🚀  delay:::", r);
        resolve(r);
      }, delay * 500);
    });
  };
})();

for (let i = 0; i < 7; i++) {
  queue.push(gennerateAsyncFn);
}
