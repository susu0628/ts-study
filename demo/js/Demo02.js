"use strict";
var count = 0x12;
var xiaojiang = {
    username: 'jiang',
    age: 19
};
var xiaotan = {
    username: 'tan',
    age: 19
};
var func1 = function () {
    return 'jiang';
};
// string 数组中只能存储字符串类型的值
var arr = ['1', '2', '3'];
// (string | number) 数组中只能存储字符串类型和数字类型的值
var arr1 = ['1', '2', 3];
// any 数组可以中可以存储任意类型的值
var arr2 = [1, 2, '3', '4', true, function () { }];
// 数组中对象
var obj = [{
        name: 'jiang',
        age: 18
    }, {
        name: 'tan',
        age: 19
    }];
var obj1 = [{
        name: 'jiang',
        age: 18
    }];
// 除了类型别名可以 class也可以
var person2 = /** @class */ (function () {
    function person2() {
    }
    return person2;
}());
var obj2 = [{
        name: 'jiang',
        age: 18
    }];
console.log(obj2);
// 枚举类型 只有确定的值
var Gender;
(function (Gender) {
    Gender["Male"] = "\u7537";
    Gender["Femal"] = "\u5973";
})(Gender || (Gender = {}));
/**
 * Tips
 * 1. TypeScript静态类型分为两种，① 基础静态类型  ② 对象类型
 * 基础静态类型 const key: 类型 = value
 * 常见的类型有 number string null undefined symbol boolean void等
 */ 
