

class A {
  AName: string
  x: number
  constructor (name: string) {
    this.AName = name // 定义在A类的实例上
    this.x = 1
  }
  p () {
    return this.AName
  }
  print () {
    console.log(this.x)
  }
}
class B extends A {
  x: number
  constructor (name: string) {
    super(name)
    this.AName = name
    console.log(super.p()) // 指向原型对象，可以调用原型上的方法
    this.x = 3
  }
  getAName () {
    // 1. 在普通方法中， super指向原型对象，所以无法访问实例上的方法/属性
    // console.log(super.AName) // 报错
    // 2. 在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前子类的实例
    super.print() // 3
  }
}
let b1 = new B ('jiang')
b1.getAName()

class C {
  static getName (name: string) { // 静态方法
    console.log('static', name)
  }
  getName (name: string) {
    console.log('instance', name)
  }
}
class D extends C {
  static getName (name: string) {
    super.getName(name) // super在静态方法中指向父类
  }
  getName (name: string) {
    super.getName(name)
  }
}
const D11 = new D()
// 静态方法 通过类型调用
D.getName('jiang')  // static jiang
D11.getName('tan') // instance tan
