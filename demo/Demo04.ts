let personarr: (string | number)[] = ['jiang', 'programmer', 18]
let personarr2: (string | number)[] = ['jiang', 18, 'programmer']
// 无法固定数组中每个元素的类型

let personarr3: [string, string, number] = ['jiang', 'programmer', 18]

// 定义了一个接口，简化代码
interface Person1 {
  name: string,
  grade: number[],
  age?: number // age是可选的值  key?: type
  [propname: string]: any,
  say: () => void
}
function test ({name, grade, age, sex, say}: Person1) {
  let isPass = true
  grade.map((item) => {
    if (item < 60) {
      isPass = false
    }
  })
  if (age) {
    console.log(`${name}: 您的成绩为${isPass ? '及格' : '不及格'}, 年龄为：${age}, 性别为: ${sex}`)
  } else {
    console.log(`${name}: 您的成绩为${isPass ? '及格' : '不及格'}`)
  }
  say && say()
}
function getGrade ({name, grade}: Person1) {
  let sum = grade.reduce((sum, item) => {
    return sum + item
  }, 0)
  console.log(`所有科目加起来的分数为: ${sum}`)
}
const person11= {
  name: 'jiang',
  grade: [81, 96],
  age: 18,
  sex: '女',
  say() {
    console.log('wo shi yi ge xiao ke ai')
    // return 'wo shi yi ge xiao ke ai'
  }
}
// test(person11)
// getGrade(person11)



