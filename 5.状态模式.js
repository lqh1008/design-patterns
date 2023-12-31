class CoffeeMaker {
  constructor() {
    /**
      这里略去咖啡机中与咖啡状态切换无关的一些初始化逻辑
    **/
    // 初始化状态，没有切换任何咖啡模式
    this.state = "init";
  }
  changeState(state) {
    // 记录当前状态
    this.state = state;
    if (state === "american") {
      // 这里用 console 代指咖啡制作流程的业务逻辑
      this.americanProcess();
    } else if (state === "latte") {
      this.latteProcress();
    } else if (state === "vanillaLatte") {
      this.vanillaLatteProcress();
    } else if (state === "mocha") {
      this.mochaProcress();
    }
  }

  americanProcess() {
    console.log("我只吐黑咖啡");
  }

  latteProcress() {
    this.americanProcess();
    console.log("加点奶");
  }

  vanillaLatteProcress() {
    this.latteProcress();
    console.log("再加香草糖浆");
  }

  mochaProcress() {
    this.latteProcress();
    console.log("再加巧克力");
  }
}

const mk = new CoffeeMaker();
mk.changeState("latte");
