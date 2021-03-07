"use strict";
const count = 0x12;
const xiaojiang = {
    username: 'jiang',
    age: 19
};
const xiaotan = {
    username: 'tan',
    age: 19
};
const func1 = () => {
    return 'jiang';
};
// 1. string 数组中只能存储字符串类型的值
const arr = ['1', '2', '3'];
// 2. (string | number) 数组中只能存储字符串类型和数字类型的值
const arr1 = ['1', '2', 3];
// 3. any 数组可以中可以存储任意类型的值
const arr2 = [1, 2, '3', '4', true, () => { }];
// 4. 数组中对象
const obj = [{
        name: 'jiang',
        age: 18
    }, {
        name: 'tan',
        age: 19
    }];
const obj1 = [{
        name: 'jiang',
        age: 18
    }];
// 6. 除了类型别名可以 class也可以
// class person1 {
//   name: string
//   age: 18
// }
// const obj2: person2[] = [{
//   name: 'jiang',
//   age: 18
// }]
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
