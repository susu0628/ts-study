"use strict";
// test
const person = 'jiang';
const say = () => {
    console.log('wo shi jiangsusu');
};
say();
// 联合类型: 一个变量可能有两种或两种以上的类型 eg: people
function judgeWho(people) {
    // people.say() // people是联合类型，无法直接判断是什么类型，所以，不一定会有say()方法，可用类型断言的方法
    // 类型保护--类型断言 具体实现如下
    // if (people.Isteaching) {
    //   (people as Teacher).say()
    // } else {
    //   (people as Doctor).cure()
    // }
    // 类型保护--in语法 具体实现如下
    // 来判断people里有没有say()方法。
    if ("say" in people) {
        people.say();
    }
    else {
        people.cure();
    }
}
// const T1: Teacher = {
//   Isteaching: true,
//   say: () => {
//     console.log('wo shi teacher')
//   }
// }
// judgeWho(T1)
const D1 = {
    Isteaching: false,
    cure: () => {
        console.log('wo shi doctor');
    }
};
judgeWho(D1);
function Add(first, second) {
    // 类型保护 typeof语法
    if (typeof first === 'string' || typeof second === 'string') {
        console.log(`${first}${second}`);
    }
    else {
        console.log(first + second);
    }
}
Add(5, 6);
Add('5', 6);
