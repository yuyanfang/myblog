// 对象定义

let firstName = 'wu',
    lastName = 'fangjian';


let obj = {
  firstName,
  lastName,
  fullName(){
    return this.firstName + lastName;
  }
}

console.log(obj)
console.log(obj.fullName());

// 结果

// { firstName: 'wu',
//   lastName: 'fangjian',
//   fullName: [Function: fullName] }
// wufangjian
