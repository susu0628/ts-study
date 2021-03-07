"use strict";
class Person {
    constructor(grade) {
        this.grade = grade;
    }
    getGrade(index) {
        console.log(this.grade[index]);
    }
}
const P1 = new Person([99, 98, 67, 88]);
P1.getGrade(1);
