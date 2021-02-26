
// ip1.sex = '男' // 无法分配到 "sex" ，因为它是只读属性。后续无法修改

interface IPerson {
  name: string,
  age?: number, // 可选属性
  readonly sex: string, // 只读属性：限制只能在对象刚刚创建的时候修改其值
  [propName: string]: any // 任意属性
}
type IPerson1 = {
  name: string,
  age?: number,
  readonly sex: string,
  [propName: string]: any
}
let ip1: IPerson = {
  name: 'jiang',
  sex: '女', // 刚创建的时候可以修改它的值
  height: 156 // 任意属性
}
let tip1: IPerson1 = {
  name: 'tan',
  sex: '男',
  height: 176
}

console.log(ip1, tip1)

type Name = string | number
type variable = "click" | 'doubleClick' | 'mouseover'
type tpointX = {x: number}
type tpointY = {y: number}
type tpoint = tpointX & tpointY
let tpoint1: tpoint = {
  x: 2,
  y: 3
}
console.log(tpoint1.x, tpoint1.y) // 2  3


type ipointX = {
  x: number
}
type ipointY = {
  y: number
}
type ipoint = ipointX & ipointY & {
  z: number
}
let ipoint1: ipoint = {
  x: 2,
  y: 3,
  z: 4
}
console.log(ipoint1.x, ipoint1.y, ipoint1.z) // 2  3  4 

interface ImplementPoint {
  x: number,
  y: number
}
class SomePoint1 implements ImplementPoint {
  x = 2
  y = 3
}
type TImplementPoint = {
  x: number,
  y: number
}
class SomePoint2 implements TImplementPoint {
  x = 3
  y = 4
}
const some1 = new SomePoint1()
console.log(some1.x, some1.y) // 2  3
const some2 = new SomePoint2()
console.log(some2.x, some2.y) // 3  4

type partPoint = {x: number} | {y: number}
// class SomePoint3 implements partPoint { // 类只能实现具有静态已知成员的对象类型或对象类型的交集

// }

interface p1 {
  x: number
}
interface p1 {
  y: number
}
const tp: p1 = {
  x: 2,
  y: 3
}

