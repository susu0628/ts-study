class Person1 {
  name = 'jiang';
  page = 18;
  psay () {
    return `我的名字是: ${this.name}, 我的年龄为: ${this.page}`
  }
}
class Student extends Person1 {
  job = 'xue sheng';
  psay() {
    return super.psay() + `职业是: ${this.job}`
  }
}
const p1 = new Person1()
console.log(p1.psay())

const s1 = new Student()
console.log(s1.psay())

