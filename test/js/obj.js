
// 三、 构造函数模式
// function Cat(name, color){
// 	this.name = name;
// 	this.color = color;
// }

// var cat1 = new Cat("大黄", 'yellow');
// var cat2 = new Cat("小黑", 'black');


// console.log(cat1 instanceof Cat); // true
// console.log(cat1.constructor === cat2.constructor); // true



// 四、构造函数模式的问题

// function Dog(name, color){
// 	this.name = name;
// 	this.color = color;
// }

// Dog.prototype.type = 'Dog ～～';
// Dog.prototype.eat = function(){
// 	console.log('Dog eat');
// }

// var dog1 = new Dog('小花', 'white');
// dog1.eat()


// 组合

function superType(name){
	this.name = name;
	this.colors = ["red", "yellow"];
}

superType.prototype.sayName = function(){
	console.log(this.name);
}


function subType(name, age){
	superType.call(this, name);
	this.age = age;
}


subType.prototype = new superType();

subType.prototype.sayName = function(){
	console.log(this.name);
}











