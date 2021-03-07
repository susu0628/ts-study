"use strict";
// 1. 数字枚举
var Direction1;
(function (Direction1) {
    Direction1[Direction1["NORTH"] = 3] = "NORTH";
    Direction1[Direction1["SOUTH"] = 4] = "SOUTH";
    Direction1[Direction1["EAST"] = 5] = "EAST";
    Direction1[Direction1["WEST"] = 6] = "WEST";
})(Direction1 || (Direction1 = {}));
let dir1 = Direction1.WEST; // 普通映射 从成员名称到成员值
let dir2 = Direction1[4]; // 反向映射 从成员值到成员名称
console.log(dir1, dir2); // 6 SOUTH
// 2. 字符串枚举
var Direction2;
(function (Direction2) {
    Direction2["NORTH"] = "NORTH";
    Direction2["SOUTH"] = "SOUTH";
    Direction2["EAST"] = "EAST";
    Direction2["WEST"] = "WEST";
})(Direction2 || (Direction2 = {}));
let dir3 = Direction2.NORTH;
console.log(dir3); // "NORTH"
// 3. 异构枚举
var Direction3;
(function (Direction3) {
    Direction3[Direction3["A"] = 0] = "A";
    Direction3[Direction3["B"] = 1] = "B";
    Direction3["C"] = "C";
    Direction3["D"] = "D";
    Direction3[Direction3["E"] = 8] = "E";
    Direction3[Direction3["F"] = 9] = "F";
})(Direction3 || (Direction3 = {}));
// 0 A 8 9
console.log(Direction3.A, Direction3[0], Direction3.E, Direction3.F);
