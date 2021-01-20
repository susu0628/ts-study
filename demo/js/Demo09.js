"use strict";
function getJob(status) {
    if (status === 0) {
        console.log('Teacher');
    }
    else if (status === 1) {
        console.log('Doctor');
    }
    else if (status === 2) {
        console.log('Actor');
    }
    else {
        console.log('Programmer');
    }
}
// getJob(1)
/**
 * {
 *   '0': 'Teacher',
 *   '1': 'Doctor',
 *   '2': 'Actor',
 *   '3': 'Programmer',
 *   Teacher: 0,
 *   Doctor: 1,
 *   Actor: 2,
 *   Programmer: 3
 * }
 */
var jobstatus;
(function (jobstatus) {
    jobstatus[jobstatus["Teacher"] = 0] = "Teacher";
    jobstatus[jobstatus["Doctor"] = 1] = "Doctor";
    jobstatus[jobstatus["Actor"] = 2] = "Actor";
    jobstatus[jobstatus["Programmer"] = 3] = "Programmer";
})(jobstatus || (jobstatus = {}));
function getJob1(status) {
    if (status === jobstatus.Teacher) {
        console.log('Teacher');
    }
    else if (status === jobstatus.Doctor) {
        console.log('Doctor');
    }
    else if (status === jobstatus.Actor) {
        console.log('Actor');
    }
    else {
        console.log('Programmer');
    }
}
console.log(jobstatus.Teacher, jobstatus[0]);
getJob1(2);
