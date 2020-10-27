function getJob (status: number) {
  if (status === 0) {
    console.log('Teacher')
  } else if (status === 1) {
    console.log('Doctor')
  } else if (status === 2) {
    console.log('Actor')
  } else {
    console.log('Programmer')
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
enum jobstatus {
  Teacher,
  Doctor,
  Actor,
  Programmer
}
function getJob1 (status:number) {
  if (status === jobstatus.Teacher) {
    console.log('Teacher')
  } else if (status === jobstatus.Doctor) {
    console.log('Doctor')
  } else if (status === jobstatus.Actor) {
    console.log('Actor')
  } else {
    console.log('Programmer')
  }
}
console.log(jobstatus.Teacher, jobstatus[0])
getJob1(2)