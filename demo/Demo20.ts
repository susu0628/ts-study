

class CPerson {
  static age: number // 静态属性，只能通过类名调用
  cpname: string // 成员属性
  constructor (name: string) { // 构造函数
    this.cpname = name
  }
  sayHello (): void { // 成员方法
    console.log(`hello ${this.cpname}`)
  }
  static sayAge (): void { // 静态属性
    console.log(`I AM ${CPerson.age}`)
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    this.cpname = value
    console.log('setter: '+value);
  }
}

CPerson.age = 18

const cp1 = new CPerson('jiang')
cp1.sayHello() // hello jiang
console.log(cp1.cpname) // jiang

CPerson.sayAge() // I AM 18


class CPerson1 {
  #age1: number
  name1: string
  constructor (age: number, name: string) {
    this.#age1 = age
    this.name1 = name
  }
  // #sayAge() {
  //   console.log(this.#age1)
  // }
  sayHello() {
    // this.#sayAge()
    console.log(`hello, my name is ${this.name1}, I am ${this.#age1}`)
    
  }
}
const cp11 = new CPerson1(18, 'tan')
cp11.sayHello() // 18

class CPerson2 {
  cpname: string // 不知为何 Property 'cpname' has no initializer and is not definitely assigned in the 
  get _cpname(): string {
    return this._cpname
  }
  set _cpname(name: string) {
    console.log(name)
    this.cpname = name
  }
}
const cp12 = new CPerson2()
cp12._cpname = 'jiang'

