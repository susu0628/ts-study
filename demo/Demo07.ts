class Person3 {
  constructor(public readonly name: string) {
  }
}
const pp1 = new Person3('jiang')
// 属性设置为只读（readonly）时，不可修改 
// pp1.name = 'tan'
console.log(pp1.name)

// 抽象类：描述一种类型应该具备的基本类型和方法（功能）
abstract class Personer {
  // 抽象方法不能有具体实现--只有功能声明 没有功能主体，只能由子类通过方法重写来完成
  abstract sayHello ():void
  // 子类必须实抽线类的所有方法
  // abstract introduce()
}
class Studenter extends Personer {
  sayHello () {
    console.log('I AM A STUSENT')
  }
}

class Manager extends Personer {
  sayHello () {
    console.log('I AM A MMAGER')
  }
}

const ser1 = new Studenter ()
console.log(ser1.sayHello())
const man1 = new Manager ()
console.log(man1.sayHello())
