"use strict";
function getLength(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return value;
    }
}
console.log(getLength('hello')); // 5
console.log(getLength(8)); // 8
class Foo {
    constructor(name) {
        this.name = name;
    }
    toString() {
        console.log(this.name);
    }
}
class Bar {
    constructor(code) {
        this.code = code;
    }
    toNumber() {
        console.log(this.code);
    }
}
function test(input) {
    if (input instanceof Foo) {
        input.toString();
    }
    else {
        input.toNumber();
    }
}
const foo1 = new Foo('Foo');
const bar1 = new Bar(12);
test(foo1);
test(bar1);
function printEmployeeInfomation(emp) {
    if ('privileges' in emp) { // in 判断privileges属性是否存在传入的emp中
        console.log(emp.privileges);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
let admin = {
    privileges: ['hello', 'ts']
};
let emploee = {
    startDate: new Date()
};
printEmployeeInfomation(admin); // ['hello', 'ts']
printEmployeeInfomation(emploee); // 2021-02-25T10:19:41.702Z
function isNumber(x) {
    return x;
}
