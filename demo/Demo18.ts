
// function add (x: number, y: number): number {
//   return x + y
// }
let add1: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}
console.log(add(2, 3)) // 6
console.log(add1(2, 3)) // 6

// function getAllName (firstName: string, lastName?: string): string {
//   if (lastName) {
//     return firstName + lastName 
//   }
//   return firstName
// }
// console.log(getAllName('jiang')) // jiang
// console.log(getAllName('jiang', 'susu')) // jiangsusu

// function getAllName (firstName: string, lastName: string = ' Miss'): string {
//   if (lastName) {
//     return firstName + lastName 
//   }
//   return firstName
// }
// console.log(getAllName('jiang')) // jiang Miss
// console.log(getAllName('jiang', 'susu')) // jiangsusu

function getRest (type: string, ...rest: number[]) {
  switch (type) {
    case 'add':
      return rest.reduce((total, value, index) => {
        return total + value
      }, 0)
    case 'mult': 
      return rest.reduce((total, value, index) => {
        return total * value
      }, 1)
  }
}
console.log(getRest('add', 2, 3, 4)) // 9
console.log(getRest('mult', 2, 3, 4)) // 24


type nborstr = number | string
function add (a: number, b: number): number // 函数定义（声明）
function add (a: string, b: string): string
function add (a: string, b: number): string
function add (a: number, b: string): string
function add (a: nborstr, b: nborstr): nborstr { // 函数实现
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  } 
  return a + b
}
console.log(add('1', '2')) // 12
console.log(add('2', 3))  // 23
console.log(add(3, '4')) // 34
console.log(add(4, 5))  // 9

