function identity <T, U>(value: T, message: U): T {
  console.log(message) // hello
  return value
}
console.log(identity<number, string>(12, 'hello')) // 12

// enum keys {
//   deviceName = '', // 设备名称
//   deviceCategory = '', // 设备类型Id，在设备
//   deviceVersion = '', // 设备版本
//   deviceType = 0, // 设备的类型
//   deviceCategoryId = 0, // 设备类型Id
//   status = 0, // 设备状态
//   recipe = 0, // 配方Id
// }
// type detailVo<T = typeof keys> = {
//   [K in keyof T]?: T[K];
// }
// interface logsVo {
//   deviceId: string,
//   id: number,
//   logInfo: string
// }
// let detailobj: (detailVo & { logs?: logsVo[] }) = {
// }

// interface Foo {
//   name: string,
//   age: number
// }
// type T = keyof Foo