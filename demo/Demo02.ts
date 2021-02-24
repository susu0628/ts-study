const count: number = 0x12
// 自定义静态类型
interface obj {
  username: string,
  age: number
}
const xiaojiang: obj = {
  username: 'jiang',
  age: 19
}
const xiaotan: {
  username: string,
  age: number
} = {
  username: 'tan',
  age: 19
}
const func1: () => string = () => {
  return 'jiang'
}
// 1. string 数组中只能存储字符串类型的值
const arr: string[] = ['1', '2', '3']

// 2. (string | number) 数组中只能存储字符串类型和数字类型的值
const arr1: (string | number)[] = ['1', '2', 3]

// 3. any 数组可以中可以存储任意类型的值
const arr2: any[] = [1, 2, '3', '4', true, () => {}]

// 4. 数组中对象
const obj: {name: string, age: number}[] = [{
  name: 'jiang',
  age: 18
}, {
  name: 'tan',
  age: 19
}]

// 5. 当数组中每个对象属性过多时，我们可以使用类型别名来让代码的语义性更好
type person =  {
  name: string,
  age: number
}
const obj1: person[] = [{
  name: 'jiang',
  age: 18
}]

// 6. 除了类型别名可以 class也可以
// class person1 {
//   name: string
//   age: 18
// }
// const obj2: person2[] = [{
//   name: 'jiang',
//   age: 18
// }]

// 枚举类型 只有确定的值
enum Gender {
  Male = '男',
  Femal = '女'
}
/**
 * Tips
 * 1. TypeScript静态类型分为两种，① 基础静态类型  ② 对象类型
 * 基础静态类型 const key: 类型 = value
 * 常见的类型有 number string null undefined symbol boolean void等
 */