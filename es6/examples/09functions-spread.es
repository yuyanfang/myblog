'use strict';
let foods = ['苹果', '蛋糕'],
    animals = ['狗狗', '猫', ...foods];

console.log(foods);
console.log(...foods);
console.log(animals);


// 结果

// [ '苹果', '蛋糕' ]
// 苹果 蛋糕
// [ '狗狗', '猫', '苹果', '蛋糕' ]
