// 对象属性名可以有空格

let obj = {};

obj.firstName = 'wu';
let _last = 'last name';
obj[_last] = 'fang jian';

console.log(obj);

// 结果

// { firstName: 'wu', 'last name': 'fang jian' }
