// /**
//  *  实现功能：
//  *  控制异步并发
//  */

// class Queue {
//   constructor(limit) {
//     this.limitCount = limit || 1;
//     this.runningCount = 0;
//     this.taskList = [];
//   }

//   run() {

//   }

//   async push(fn) {
//     this.taskList.push(fn);
//     this.runningCount++;
//     // const curTask = this.taskList.shift();
//     // const res = await curTask();
//     // console.log("🚀  res:::", res);
//     if (this.runningCount < this.limitCount) {
//       const curTask = this.taskList.shift();
//       const res = await curTask();
//     }
//   }
// }

// const queue = new Queue(2);

// const gennerateAsyncFn = (function () {
//   let delay = 8;
//   return function () {
//     return new Promise((resolve, reject) => {
//       let r = --delay;
//       setTimeout(() => {
//         console.log("🚀  delay:::", r);
//         resolve(r);
//       }, delay * 500);
//     });
//   };
// })();

// for (let i = 0; i < 7; i++) {
//   queue.push(gennerateAsyncFn);
// }


class AsyncQueueControl {
  constructor(tasks, concurrency) {
    this.tasks = tasks;
    this.concurrency = concurrency;
    this.results = [];
    this.runningTasks = [];
  }

  async run() {
    // 启动初始任务
    for (let i = 0; i < this.concurrency; i++) {
      this.runNextTask();
    }
  }

  async runNextTask() {
    if (this.tasks.length === 0) {
      // 所有任务完成
      return;
    }

    const task = this.tasks.shift(); // 取出下一个任务
    const taskPromise = task(); // 执行任务并获取Promise

    this.runningTasks.push(taskPromise);

    try {
      const result = await taskPromise;
      this.results.push(result);
    } catch (error) {
      console.error('任务出错:', error);
    } finally {
      // 任务完成，从运行队列中移除
      const index = this.runningTasks.indexOf(taskPromise);
      if (index !== -1) {
        this.runningTasks.splice(index, 1);
      }

      // 继续执行下一个任务
      this.runNextTask();
    }
  }

  async wait() {
    // 等待所有任务完成
    await Promise.all(this.runningTasks);
    return this.results;
  }
}

// 示例任务函数，模拟异步操作
function asyncTask(id, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`任务 ${id} 完成`);
      resolve(`任务 ${id} 结果`);
    }, delay);
  });
}

const taskQueue = [
  () => asyncTask(1, 2000),
  () => asyncTask(2, 1000),
  () => asyncTask(3, 1500),
  () => asyncTask(4, 800),
  () => asyncTask(5, 1200),
];

const concurrencyLimit = 2; // 控制并发量

const queue = new AsyncQueueControl(taskQueue, concurrencyLimit);
queue.run()
  .then(() => queue.wait())
  .then((results) => {
    console.log('所有任务完成，结果:', results);
  })
  .catch((error) => {
    console.error('异步队列控制出错:', error);
  });
