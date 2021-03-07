"use strict";
// function add (x: number, y: number): number {
//   return x + y
// }
let add1 = function (x, y) {
    return x + y;
};
console.log(add(2, 3)); // 6
console.log(add1(2, 3)); // 6
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
function getRest(type, ...rest) {
    switch (type) {
        case 'add':
            return rest.reduce((total, value, index) => {
                return total + value;
            }, 0);
        case 'mult':
            return rest.reduce((total, value, index) => {
                return total * value;
            }, 1);
    }
}
console.log(getRest('add', 2, 3, 4)); // 9
console.log(getRest('mult', 2, 3, 4)); // 24
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add('1', '2')); // 12
console.log(add('2', 3)); // 23
console.log(add(3, '4')); // 34
console.log(add(4, 5)); // 9
