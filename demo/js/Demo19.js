"use strict";
// ip1.sex = '男' // 无法分配到 "sex" ，因为它是只读属性。后续无法修改
let ip1 = {
    name: 'jiang',
    sex: '女',
    height: 156 // 任意属性
};
let tip1 = {
    name: 'tan',
    sex: '男',
    height: 176
};
console.log(ip1, tip1);
let tpoint1 = {
    x: 2,
    y: 3
};
console.log(tpoint1.x, tpoint1.y); // 2  3
let ipoint1 = {
    x: 2,
    y: 3,
    z: 4
};
console.log(ipoint1.x, ipoint1.y, ipoint1.z); // 2  3  4 
class SomePoint1 {
    constructor() {
        this.x = 2;
        this.y = 3;
    }
}
class SomePoint2 {
    constructor() {
        this.x = 3;
        this.y = 4;
    }
}
const some1 = new SomePoint1();
console.log(some1.x, some1.y); // 2  3
const some2 = new SomePoint2();
console.log(some2.x, some2.y); // 3  4
const tp = {
    x: 2,
    y: 3
};
