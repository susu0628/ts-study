"use strict";
var a = 3;
console.log(a);
var b = 3;
console.log(b);
var c = 1;
var d = 2;
var e = c + d;
function getTotal(a, b) {
    return a + b;
}
// let total = getTotal(3, 4)
// void 代表该函数无返回值
function test3() {
    console.log('lalal');
}
// 函数的参数为对象的解构,此时，需要给结构的对象定义类型
// 解构时的对象 有多个属性时
function test1(_a) {
    var name = _a.name, age = _a.age;
    console.log(name + age);
    return name + age;
}
test1({ name: '12', age: 18 });
// 解构时的对象 只有单个属性
function test2(_a) {
    var grade = _a.grade;
    console.log(234234, grade);
}
test2({ grade: [81, 95] });
var num1 = [81, 95];
var num2 = [81, 95];
console.log(num1, num2);
var obj3 = {
    name: 'jiang',
    age: 18
};
var obj5 = {
    name: 'jiang',
    age: 18
};
console.log(obj5);
/**
 * 类型注解  类型推断
 * 如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
 * 如果 TS 无法分析变量类型的话， 我们就需要使用类型注解
 */ 
