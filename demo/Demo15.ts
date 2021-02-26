
let assetValue: any = 'hello';
console.log((assetValue as string).length)
console.log((<string> assetValue).length)

// 1. 联合类型可以被断言为其中一个类型
interface Cat {
  name: string,
  run(): void
}
interface Fish {
  name: string,
  swim(): void
}
function isFinish (foo: (Cat | Fish)) {
  console.log(foo.name) // xiaoyu
  if (typeof (foo as Fish).swim === 'function') {
    return true
  } else {
    return false
  }
}
let f1: Fish = {
  name: 'xiaoyu',
  swim: () => {
    console.log('fish swim')
  }
}
console.log(isFinish(f1)) // true

// 2. 父类可以被断言为子类
interface ApiError extends Error {
  code: number
}
interface HttpError extends Error {
  statusCode: number
}

function isApiError (error: Error) {
  if (typeof (error as ApiError).code === 'number') {
    return true
  } else {
    return false
  }
}

const api1: ApiError = {
  code: 0,
  name: 'apiError',
  message: '接口报错'
}
isApiError(api1);

// 3. 任何类型都可以被断言为any
// (window as any).assetfoo = 1

// 4. any可以断言为一个具体的类型


function foo (): any {
  return 'hello'
}
const assetf1 = foo() as string


// function myFunc (maybeString?: string | null | undefined) {
//   const onlyString1: string = maybeString
//   const onlyString2: string = maybeString!
// }
// myFunc()

// type NumGenerator = () => number;
// function myFunc1(numGenerator?: NumGenerator | undefined) {
//   const num1 = numGenerator(); // Error
//   const num2 = numGenerator!(); //OK
// }
// myFunc1()

let x: number
console.log(x)
x = 10


