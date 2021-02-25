
function getLength (value: (string | number)) {
  if (typeof value === 'string') {
    return value.length
  } else {
    return value
  }
}
console.log(getLength('hello')) // 5
console.log(getLength(8)) // 8

class Foo {
  constructor(name: string) {
    (this as any).name = name
  }
  toString(): void {
    console.log((this as any).name)
  }
}
class Bar {
  constructor(code: number) {
    (this as any).code = code
  }
  toNumber(): void {
    console.log((this as any).code)
  }
}
function test (input: (Foo | Bar)) {
  if (input instanceof Foo) {
    input.toString()
  } else {
    input.toNumber()
  }
}
const foo1 = new Foo('Foo')
const bar1 = new Bar(12)
test(foo1)
test(bar1)

interface Admin {
  privileges: string[];
}
interface Employee {
  startDate: Date
}
function printEmployeeInfomation (emp: (Admin | Employee)) {
  if ('privileges' in emp) { // in 判断privileges属性是否存在传入的emp中
    console.log(emp.privileges)
  }
  if ('startDate' in emp) {
    console.log(emp.startDate)
  }
}
let admin: Admin = {
  privileges: ['hello', 'ts']
}
let emploee: Employee = {
  startDate: new Date()
}
printEmployeeInfomation(admin) // ['hello', 'ts']
printEmployeeInfomation(emploee) // 2021-02-25T10:19:41.702Z


function isNumber (x: any): x is number {
  return x
}

