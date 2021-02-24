/**
 * 元组类型：定义具有有限数量的未命名属性的类型，且必须提供每个属性的值
 * 注意：Ⅰ 有限数量
 *       Ⅱ 每个属性都必须有值，且必须一一对应
 */
let tuple1: [string, boolean] = ['1', true]
console.log(tuple1[0], tuple1[1]) // '1' true

// 返回类型为void，表示没有任何类型，对于函数而言，就是不返回任何值
function foo (): void { 
  console.log("foo")
}

// 1. object类型
function bar (o: object | null): void {
  console.log(o)
}
bar(null)
bar({})
// bar(true) // 原始类型，会报错
// bar(1)

interface XiaoTan {
  readonly id: number, // 只读
  name: string,
  age?: number, // 可选
  [propName: string]: any // 任意属性
}
let t1: XiaoTan = {
  id: 1,
  name: 'tan',
  age: 18,
  sex: 1
}
// t1.id = 2 // id只读，不可修改
console.log(t1.name) // tan

let o1 = {}
// o1.prop = 'jiang' // 类型{}不存在属性“prop”
// 通过js的原型链隐式调用，仍然可以使用Object类型上定义的所有属性和方法
console.log(o1.toString()) // [object, object]， 仍然可以调用