"use strict";
let assetValue = 'hello';
console.log(assetValue.length);
console.log(assetValue.length);
function isFinish(foo) {
    console.log(foo.name); // xiaoyu
    if (typeof foo.swim === 'function') {
        return true;
    }
    else {
        return false;
    }
}
let f1 = {
    name: 'xiaoyu',
    swim: () => {
        console.log('fish swim');
    }
};
console.log(isFinish(f1)); // true
function isApiError(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    else {
        return false;
    }
}
const api1 = {
    code: 0,
    name: 'apiError',
    message: '接口报错'
};
isApiError(api1);
// 3. 任何类型都可以被断言为any
// (window as any).assetfoo = 1
// 4. any可以断言为一个具体的类型
function foo() {
    return 'hello';
}
const assetf1 = foo();
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
let x;
console.log(x);
x = 10;
