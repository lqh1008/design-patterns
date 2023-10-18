class Dog {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eat() {
    console.log('肉骨头真好吃')
  }
}


console.log('🚀  Dog.prototype:::', Dog.prototype)
console.log('🚀  Dog.prototype.constructor:::', Dog.prototype.constructor === Dog)
const dog = new Dog('阿黄', 18)
console.log('🚀  dog.__proto__:::', dog.__proto__)