/**
 *  使用场景：
 *  需要创建一个产品，这个产品的功能确定，并且不同的功能可以选择不同的方案
 * 
 */

/**
 *  抽象工厂是将创建与使用分开
 *  1、创建用一个具体工厂去继承一个抽象工厂
 *  2、使用用一个具体产品去继承一个抽象产品（这里的产品）
 *  3. 具体工厂返回这个具体产品
 */

/**
 *   实现不确定什么操作系统的手机。
 */

// 整个手机的抽象工厂
class MobilePhoneFactory {
  // 提供操作系统的接口
  createOS() {
    throw new Error("抽象工厂方法不允许直接调用，你需要将我重写");
  }

  createHardWare() {
    throw new Error("抽象工厂方法不允许直接调用，你需要将我重写");
  }
}

// 具体工厂
// 具体工厂继承自抽象工厂
class FakeStarFactory extends MobilePhoneFactory {
  createOS() {
    return new AndroidOS();
  }

  createHardWare() {
    return new QualcommHardWare();
  }
}

// 操作系统的抽象工厂
class OS {
  controlHardWare() {
    throw new Error("抽象工厂方法不允许直接调用，你需要将我重写");
  }
}

class AndroidOS extends OS {
  controlHardWare() {
    console.log("我要用安卓的方式去操作硬件");
  }
}

class AppleOS extends OS {
  controlHardWare() {
    console.log("我要用苹果的方式去操作硬件");
  }
}

// 硬件的抽象工厂
class HardWare {
  operateByOrder() {
    throw new Error("抽象工厂方法不允许直接调用，你需要将我重写");
  }
}

class QualcommHardWare extends HardWare {
  operateByOrder() {
    console.log("我会用高通的方式去运转");
  }
}

class MiHardWare extends HardWare {
  operateByOrder() {
    console.log("我会用小米的方式去运转");
  }
}


const myPhone = new FakeStarFactory()
const myOS = myPhone.createOS()
const myHardWare = myPhone.createHardWare()
myOS.controlHardWare()
myHardWare.operateByOrder()
