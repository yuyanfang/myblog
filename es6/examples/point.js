class Point{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	toString(){
		return "x:" + this.x + "  y:" + this.y;
	}
}


class ColorPoint extends Point{
	constructor(x, y, color){
		super(x, y);
		this.color = color;
	}

	toString(){
		return "x:" + this.x + "  y:" + this.y + " color:" + this.color;
	}
}

console.log(typeof Point);
console.log(Point.prototype.constructor == Point);

var p1 = new Point(10, 20);
console.log(p1.toString());
// 类的数据类型就是函数，类本身就指向构造函数


console.log("==============================");
var s1 = new ColorPoint(1, 2, "red");
console.log(s1.toString());
//另一个需要注意的地方是，在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例。
