// 一个对象属性复制到另一个对象里面

'use strict'

let obj = {firstName: 'w', lastName: 'fj'};
let other = {likeName: 'boyi'};

Object.assign(
  obj,
  other
);

console.log(obj);
console.log(other);

// result

// { firstName: 'w', lastName: 'fj', likeName: 'boyi' }
// { likeName: 'boyi' }
