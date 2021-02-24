"use strict";
var Person = /** @class */ (function () {
    function Person(grade) {
        this.grade = grade;
    }
    Person.prototype.getGrade = function (index) {
        console.log(this.grade[index]);
    };
    return Person;
}());
var P1 = new Person([99, 98, 67, 88]);
P1.getGrade(1);
