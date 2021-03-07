"use strict";
let num = 2; // 不能将类型“3”分配给类型“1 | 2”
let en1 = 'click';
function getPrice(animal) {
    const basePrice = 12;
    switch (animal.type) {
        case 'cat':
            return animal.weight * basePrice;
        case 'fish':
            return animal.number * basePrice;
        default:
            return basePrice;
    }
}
let cat1 = {
    type: 'cat',
    weight: 2
};
let fish1 = {
    type: 'fish',
    number: 3
};
console.log(getPrice(cat1)); // 24
console.log(getPrice(fish1)); // 36
let point = {
    x: 2,
    y: 3
};
console.log(point.x, point.y); // 2, 3
let de = {
    x: {
        d: true,
        e: 'hello'
    }
};
console.log(de); // {x: {d: true, e: 'hello'}}
