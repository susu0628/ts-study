"use strict";
var personarr = ['jiang', 'programmer', 18];
var personarr2 = ['jiang', 18, 'programmer'];
// 无法固定数组中每个元素的类型
var personarr3 = ['jiang', 'programmer', 18];
function test(_a) {
    var name = _a.name, grade = _a.grade, age = _a.age, sex = _a.sex, say = _a.say;
    var isPass = true;
    grade.map(function (item) {
        if (item < 60) {
            isPass = false;
        }
    });
    if (age) {
        console.log(name + ": \u60A8\u7684\u6210\u7EE9\u4E3A" + (isPass ? '及格' : '不及格') + ", \u5E74\u9F84\u4E3A\uFF1A" + age + ", \u6027\u522B\u4E3A: " + sex);
    }
    else {
        console.log(name + ": \u60A8\u7684\u6210\u7EE9\u4E3A" + (isPass ? '及格' : '不及格'));
    }
    say && say();
}
function getGrade(_a) {
    var name = _a.name, grade = _a.grade;
    var sum = grade.reduce(function (sum, item) {
        return sum + item;
    }, 0);
    console.log("\u6240\u6709\u79D1\u76EE\u52A0\u8D77\u6765\u7684\u5206\u6570\u4E3A: " + sum);
}
var person11 = {
    name: 'jiang',
    grade: [81, 96],
    age: 18,
    sex: '女',
    say: function () {
        console.log('wo shi yi ge xiao ke ai');
        // return 'wo shi yi ge xiao ke ai'
    }
};
// test(person11)
// getGrade(person11)
