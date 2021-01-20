// 泛型：泛指的类型
function join <jointype> (first: jointype, second: jointype) {
  console.log(`${first}${second}`)
}
join<string>('1', '2')

// 泛型中数组的使用
// 也可使用(params: Array[arrayType])
function sum<arrayType> (params: arrayType[]) {
  // ? 运算符“+”不能应用于类型“arrayType”和“arrayType”
  // if (typeof params[0] === 'number' && typeof params[1] === 'number') {
  //   let total = params[0] + params[1]
  //   console.log(total)
  // }
  // let sum = params.reduce((total, value: arrayType) => {
  //   if (typeof value === 'number') {
  //     return total + value
  //   }
  // }, 0)
  // console.log(sum)
}
sum<number>([1, 2])

function total (arr: number[]) {
  console.log(`${arr[0] + arr[1]}`)
}
total([1, 2])

// 多个泛型的使用<jointype1, jointype2>
function joinarr <jointype1, jointype2> (first: jointype1, second: jointype2) {
  if (typeof first === 'string' && typeof second === 'number') {
    console.log(first + second)
  }
}
joinarr<string, number>('1', 3)