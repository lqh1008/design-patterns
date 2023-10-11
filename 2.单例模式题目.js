/**
 * 实现Storage，使得该对象为单例，基于 localStorage 进行封装。实现方法 setItem(key,value) 和 getItem(key)。
 */

// 方案1： 静态方法
// class Storage {
//   static getInstance() {
//     if (!Storage.instance) {
//       Storage.instance = new Storage();
//     }
//     return Storage.instance;
//   }

//   getItem(key) {
//     localStorage.getItem(key);
//   }

//   setItem(key, value) {
//     localStorage.setItem(key, value);
//   }
// }

// console.log(Storage.getInstance() === Storage.getInstance());

// 方案1： 闭包

function StorageBase() {}
StorageBase.prototype.getItem = function (key) {
  return localStorage.getItem(key);
};
StorageBase.prototype.setItem = function (key, value) {
  return localStorage.setItem(key, value);
};

const Storage = (() => {
  let instance = null;
  return function () {
    if (!instance) {
      instance = new StorageBase()
    }
    return instance;
  };
})();

const s1 = new Storage();
const s2 = new Storage();
console.log(s1);
console.log(s2);
console.log(s1 === s2);
