// 1. 数字枚举
enum Direction1 {
  NORTH = 3, // 默认从0开始，也可以自己设置默认值
  SOUTH,
  EAST,
  WEST
}
let dir1: Direction1 = Direction1.WEST // 普通映射 从成员名称到成员值
let dir2 = Direction1[4]  // 反向映射 从成员值到成员名称
console.log(dir1, dir2) // 6 SOUTH

// 2. 字符串枚举
enum Direction2 {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST"
}
let dir3: Direction2 = Direction2.NORTH
console.log(dir3) // "NORTH"

// 3. 异构枚举
enum Direction3 {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F
}
// 0 A 8 9
console.log(Direction3.A, Direction3[0], Direction3.E, Direction3.F)

