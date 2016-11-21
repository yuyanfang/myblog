// 结构对象

'use strict'

function animals(dog, cat, {place, like} ={}){
  console.log(dog, cat, place, like);
}

animals('狗狗', '猫猫', {place: '大山', like: '吃艹'});

// 结果

```
狗狗 猫猫 大山 吃艹
```
