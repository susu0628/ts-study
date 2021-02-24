enum Direction {
  A,
  B,
  C
}
let value: any
value = 1
value = 'hello'
value = ['a', 'b', 'c']
value = Direction[0]
console.log(value) // A
// value.foo.bar // value为any可以逃避类型检查，所以这里不会报错，但在运行时会报错
// value.trim()
// new value()
// value[0][1]

let value1: unknown
value1 = 1
value1 = 'hello'
value1 = Direction[1]
console.log(value1) // B
// value1.foo.bar // 类型检查，会报错，不用等到运行时才会发现

// Any类型可以赋值给任意类型，而Unknown类型只能赋值给Any类型和Unknown类型
let value3: boolean = value
let value4: boolean = value1 // 不能将Unknown类型赋值给bool类型
value = value1 // Unknown类型赋值给Any类型
let value5: any = value1



