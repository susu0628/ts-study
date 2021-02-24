"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    return Person3;
}());
var pp1 = new Person3('jiang');
// 属性设置为只读（readonly）时，不可修改 
// pp1.name = 'tan'
console.log(pp1.name);
// 抽象类：描述一种类型应该具备的基本类型和方法（功能）
var Personer = /** @class */ (function () {
    function Personer() {
    }
    return Personer;
}());
var Studenter = /** @class */ (function (_super) {
    __extends(Studenter, _super);
    function Studenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Studenter.prototype.sayHello = function () {
        console.log('I AM A STUSENT');
    };
    return Studenter;
}(Personer));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.sayHello = function () {
        console.log('I AM A MMAGER');
    };
    return Manager;
}(Personer));
var ser1 = new Studenter();
console.log(ser1.sayHello());
var man1 = new Manager();
console.log(man1.sayHello());
