
let num: 1 | 2 = 2  // 不能将类型“3”分配给类型“1 | 2”
type EventNames = 'click' | 'scroll'
let en1: EventNames = 'click'
// let en2: EventNames = 'mousemove' // 不能将类型“"mousemove"”分配给类型“EventNames”

interface UCat {
  type: 'cat',
  weight: number
}
interface UFish {
  type: 'fish',
  number: number
}
type animalType = UCat | UFish
function getPrice (animal: animalType) {
  const basePrice = 12
  switch (animal.type) {
    case 'cat':
      return animal.weight * basePrice
    case 'fish':
      return animal.number * basePrice
    default:
      return basePrice
  }
}
let cat1: UCat = {
  type: 'cat',
  weight: 2
}
let fish1: UFish = {
  type: 'fish',
  number: 3
}
console.log(getPrice(cat1)) // 24
console.log(getPrice(fish1)) // 36


// 交叉类型
type pointX = {
  x: number
}
type Point = pointX & {y: number}
let point: Point = {
  x: 2,
  y: 3
}
console.log(point.x, point.y) // 2, 3

interface X {
  c: string,
  d: string
}
interface Y {
  c: number,
  e: string
}
type XY = X & Y
type YX = Y & X
// let p: XY = {
//   c: 'hello', // 不能将类型“string”分配给类型“never”
//   d: 'ts'
// }
// let q: YX = {
//   c: 12, // 不能将类型“number”分配给类型“never”
//   e: 'hello'
// }


interface A {
  d: boolean
}
interface B {
  e: string
}
interface D {
  x: A
}
interface E {
  x: B
}
type DE = D & E
let de: DE = {
  x: {
    d: true,
    e: 'hello'
  }
}
console.log(de) // {x: {d: true, e: 'hello'}}