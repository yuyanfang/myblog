


'use strict'

let obj1 = {
  getName: function(){
    return 'fangjian'
  }
}


let obj2 = {
  getName: function(){
    return 'fj';
  }
}

let obj3 = Object.create(obj1);
console.log(obj3.getName());
console.log(Object.getPrototypeOf(obj3) === obj1);

Object.setPrototypeOf(obj3, obj2);
console.log(obj3.getName());
console.log(Object.getPrototypeOf(obj3) === obj2);


// result

// fangjian
// true
// fj
// true
