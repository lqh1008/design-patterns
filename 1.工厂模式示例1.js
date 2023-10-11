class BianQiangFactory {
  createXueXi() {}
  createJianShen() {}
}

class BianQiang extends BianQiangFactory {
  createXueXi() {
    return new Reading();
  }
  createJianShen() {
    return new Basketball();
  }
}

class Ball {
  play() {}
}

class Basketball extends Ball {
  play() {
    console.log("我爱打篮球");
  }
}

class XueXi {
  nuli() {}
}

class Reading extends XueXi {
  nuli() {
    console.log('我好努力啊');
  }
}

const bianqinag = new BianQiang()
const xuexi = bianqinag.createXueXi()
const jianshen = bianqinag.createJianShen()
console.log(bianqinag);