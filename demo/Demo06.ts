class Person {
  public name: string
  // ts中类的构造函数
  constructor(name: string) {
    this.name = name
  }
}
const np1 = new Person('jiang')
console.log(np1.name)

// 也可简化
class Person2 {
  constructor(public name: string) {}
}
const np2 = new Person2('tan')
console.log(np2.name)

// 继承
class Student1 extends Person2 {
  constructor(public age: number) {
    // 只要是继承自某一类 就一定要调用super
    super('wang')
  }
}
const s11 = new Student1(18)
console.log(s11.name, s11.age)

// 类的 getter setter 方法
class Teacher extends Person2 {
  // job === 1 语文老师  job === 2 数学老师
  constructor(private job: number) {
    super('pan')
  }
  get _job() {
    return `${this.name}是一个${this.job === 1 ? '语文老师' : '数学老师'}`
  }
  set _job(value) {
    this.job = +value
  }
}
const t1 = new Teacher(1)
console.log(t1._job)

// 静态修饰符static 以及只读属性 readonly
class Cleaner extends Person2 {
  public readonly _sex: string
  constructor (sex: number) {
    super('panpan')
    this._sex = sex === 1 ? '男' : '女'
  }
  static sayHello () {
    return `您好`
  }
}
const c1 = new Cleaner(1)
console.log(Cleaner.sayHello())
console.log(c1._sex)
// c1._sex = '女' // _sex的只读属性，无法修改