'use strict'
function animals(dog, cat, ...other){
  console.log(dog, cat, other);
  console.log(dog, cat, ...other);
}

animals('狗狗', '猫猫', '山羊', '牛')

// 结果

// 狗狗 猫猫 [ '山羊', '牛' ]
// 狗狗 猫猫 山羊 牛
