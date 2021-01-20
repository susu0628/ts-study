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
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name = 'jiang';
        this.page = 18;
    }
    Person1.prototype.psay = function () {
        return "\u6211\u7684\u540D\u5B57\u662F: " + this.name + ", \u6211\u7684\u5E74\u9F84\u4E3A: " + this.page;
    };
    return Person1;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.job = 'xue sheng';
        return _this;
    }
    Student.prototype.psay = function () {
        return _super.prototype.psay.call(this) + ("\u804C\u4E1A\u662F: " + this.job);
    };
    return Student;
}(Person1));
var p1 = new Person1();
console.log(p1.psay());
var s1 = new Student();
console.log(s1.psay());
