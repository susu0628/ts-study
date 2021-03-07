"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _age1;
class CPerson {
    constructor(name) {
        this.cpname = name;
    }
    sayHello() {
        console.log(`hello ${this.cpname}`);
    }
    static sayAge() {
        console.log(`I AM ${CPerson.age}`);
    }
}
CPerson.age = 18;
const cp1 = new CPerson('jiang');
cp1.sayHello(); // hello jiang
console.log(cp1.cpname); // jiang
CPerson.sayAge(); // I AM 18
class CPerson1 {
    constructor(age) {
        _age1.set(this, void 0);
        __classPrivateFieldSet(this, _age1, age);
    }
    sayAge() {
        console.log(__classPrivateFieldGet(this, _age1));
    }
}
_age1 = new WeakMap();
const cp11 = new CPerson1(18);
cp11.sayAge();
