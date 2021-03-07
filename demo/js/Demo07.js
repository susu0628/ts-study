"use strict";
class Person3 {
    constructor(name) {
        this.name = name;
    }
}
const pp1 = new Person3('jiang');
// 属性设置为只读（readonly）时，不可修改 
// pp1.name = 'tan'
console.log(pp1.name);
// 抽象类：描述一种类型应该具备的基本类型和方法（功能）
class Personer {
}
class Studenter extends Personer {
    sayHello() {
        console.log('I AM A STUSENT');
    }
}
class Manager extends Personer {
    sayHello() {
        console.log('I AM A MMAGER');
    }
}
const ser1 = new Studenter();
console.log(ser1.sayHello());
const man1 = new Manager();
console.log(man1.sayHello());
