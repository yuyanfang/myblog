'use strict';



//#基本用法

// 1 let作用域只在当前代码块
// 	 var在全局作用域
// {
// 	let a = 1;
// 	var b = 2;
// }
// console.log(b);


// ====================
// var arr = [];
// for(var i = 0; i<10; i++){
// 	arr[i] = function(){
// 		return i;
// 	}
// }
// console.log(arr[0]());


// 
// let brr = [];
// for(let j = 0; j < 10; j++ ){
// 	brr[j] = function(){
// 		return j;
// 	}
// }
// console.log(brr[5]())

//##不存在变量提升
// console.log(foo); // ReferenceErrorlet foo = 2;
// typeof x; // ReferenceErrorlet x;


//##暂时性死区
//只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
// var tmp = 123;
// if (true) {
// 	tmp = 'abc'; // ReferenceError  
// 	let tmp;
// }


//##不允许重复声明
//1.let不允许在相同作用域内，重复声明同一个变量
//2.不能在函数内部重新声明参数
function func(arg){
	let arg = 0;
	console.log(arg);
}

func(1);










