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
var Personclass = /** @class */ (function () {
    // ts中类的构造函数
    function Personclass(name) {
        this.name = name;
    }
    return Personclass;
}());
var np1 = new Personclass('jiang');
console.log(np1.name);
// 也可简化
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
var np2 = new Person2('tan');
console.log(np2.name);
// 继承
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(age) {
        var _this = 
        // 只要是继承自某一类 就一定要调用super
        _super.call(this, 'wang') || this;
        _this.age = age;
        return _this;
    }
    return Student1;
}(Person2));
var s11 = new Student1(18);
console.log(s11.name, s11.age);
// 类的 getter setter 方法
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    // job === 1 语文老师  job === 2 数学老师
    function Teacher(job) {
        var _this = _super.call(this, 'pan') || this;
        _this.job = job;
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "_job", {
        get: function () {
            return this.name + "\u662F\u4E00\u4E2A" + (this.job === 1 ? '语文老师' : '数学老师');
        },
        set: function (value) {
            this.job = +value;
        },
        enumerable: false,
        configurable: true
    });
    return Teacher;
}(Person2));
var t1 = new Teacher(1);
console.log(t1._job);
// 静态修饰符static 以及只读属性 readonly
var Cleaner = /** @class */ (function (_super) {
    __extends(Cleaner, _super);
    function Cleaner(sex) {
        var _this = _super.call(this, 'panpan') || this;
        _this._sex = sex === 1 ? '男' : '女';
        return _this;
    }
    Cleaner.sayHello = function () {
        return "\u60A8\u597D";
    };
    return Cleaner;
}(Person2));
var c1 = new Cleaner(1);
console.log(Cleaner.sayHello());
console.log(c1._sex);
// c1._sex = '女' // _sex的只读属性，无法修改
