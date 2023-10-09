/**
 *  使用场景：
 *  我们尝试去创建多少次，它都只给你返回第一次所创建的那唯一的一个实例
 */

class SingleDog {
  show() {
    console.log("我是单例对象");
  }

 static getInstance() {
    if (!SingleDog.instance) {
        SingleDog.instance = new SingleDog();
    }
    return SingleDog.instance;
  }
}


const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()
console.log(s1)
console.log(s1===s2);