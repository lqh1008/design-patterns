// 询价方法，接受价格标签和原价为入参
// function askPrice(tag, originPrice) {
//   // 处理预热价
//   if (tag === "pre") {
//     if (originPrice >= 100) {
//       return originPrice - 20;
//     }
//     return originPrice * 0.9;
//   }

//   // 处理大促价
//   if (tag === "onSale") {
//     if (originPrice >= 100) {
//       return originPrice - 30;
//     }
//     return originPrice * 0.8;
//   }

//   // 处理返场价
//   if (tag === "back") {
//     if (originPrice >= 200) {
//       return originPrice - 50;
//     }
//     return originPrice;
//   }

//   // 处理尝鲜价
//   if (tag === "fresh") {
//     return originPrice * 0.5;
//   }
// }

// 优化后
const priceObj = {
  pre(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 20;
    }
    return originPrice * 0.9;
  },

  onSale(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 30;
    }
    return originPrice * 0.8;
  },

  back(originPrice) {
    if (originPrice >= 200) {
      return originPrice - 50;
    }
    return originPrice;
  },

  fresh(originPrice) {
    return originPrice * 0.5;
  },
};

function askPrice(tag, originPrice) {
  return priceObj[tag](originPrice);
}

priceObj.newPrice = function (originPrice) {
  return originPrice * 100;
};

const test1 = askPrice("pre", 100);
console.log("🚀  test1:::", test1);

const test2 = askPrice("newPrice", 100);
console.log("🚀  test2:::", test2);
