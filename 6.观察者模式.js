class Publisher {
  constructor(name) {
    this.observers = [];
    this.name = name
  }

  add(observer) {
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach((item) => {
      item.update(this);
    });
  }

  remove(observer) {
    const index = this.observers.findIndex((item) => item === observer);
    this.observers.splice(index, 1);
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log(`output->我被更新了`, this.name);
  }
}

// const ailun = new Observer("艾伦");

// const aermin = new Observer("阿尔敏");

// const publisher = new Publisher();

// publisher.add(ailun);

// publisher.add(aermin);

// publisher.remove(ailun);

// setTimeout(() => {
//   publisher.notify();
// }, 2000);


class ProdPublish extends Publisher {
  constructor(name) {
    super();
    this.observers = [];
    this.name = name
    this.prodFile = null;
  }

  setProdFile() {
    this.prodFile = '新的文件'
    this.notify()
  }

  getProdFile() {
    return this.prodFile
  }
}

class DevObserver extends Observer {
  constructor(name) {
    super();
    this.prodFile = null
    this.name = name
  }

  update(publisher) {
    this.prodFile = publisher.getProdFile()
    this.work()
  }

  work() {
    console.log(`我是${this.name},我开始处理->`, this.prodFile)
  }
}


const mikasa = new ProdPublish('三笠')
console.log('🚀  mikasa:::', mikasa)

const ailun = new DevObserver("艾伦");

const aermin = new DevObserver("阿尔敏");

mikasa.add(ailun)

mikasa.add(aermin)

setTimeout(() => {
  mikasa.setProdFile()
}, 2000)



// 以下两个是 Observer
// observe方法遍历并包装对象属性
function observe(target) {
  // 若target是一个对象，则遍历它
  if (target && typeof target === 'object') {
    Object.keys(target).forEach((key) => {
      // defineReactive方法会给目标属性装上“监听器”
      defineReactive(target, key, target[key])
    })
  }
}

// 定义defineReactive方法
function defineReactive(target, key, val) {
  // 属性值也可能是object类型，这种情况下需要调用observe进行递归遍历
  observe(val)
  // 为当前属性安装监听器
  Object.defineProperty(target, key, {
    // 可枚举
    enumerable: true,
    // 不可配置
    configurable: false,
    get: function () {
      return val;
    },
    // 监听器函数
    set: function (value) {
      console.log(`${target}属性的${key}属性从${val}值变成了了${value}`)
      val = value
    }
  });
}

const observe1 = {
  name: 'mikasa',
  age: 18
}

observe(observe1)

setTimeout(() => {
  observe1.age = 20
}, 2000);


// 订阅者 Dep
// 定义订阅者类Dep
class Dep {
  constructor() {
    // 初始化订阅队列
    this.subs = []
  }

  // 增加订阅者
  addSub(sub) {
    this.subs.push(sub)
  }

  // 通知订阅者（是不是所有的代码都似曾相识？）
  notify() {
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}
