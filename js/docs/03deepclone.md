
# 深度拷贝

这个词语感觉挺高大上的，但实际意义并没有这么复杂。关键在于理解堆栈、值传递和引用传递。

## 堆栈

**栈(stack)** 为自动分配的内存空间，它由系统自动释放；

**堆(heap)** 则是动态分配的内存，大小不定也不会自动释放。

**基本数据类型** 存储在栈内存中 [Undefined、Null、Boolean、Number 和 String]

> 存放在栈内存中的简单数据段，数据大小确定，内存空间大小可以分配。5种基本数据类型有Undefined、Null、Boolean、Number 和 String，它们是直接按值存放的，所以可以直接访问。

**引用数据类型** 存储在堆内存中 [对象、数组、函数]

> 存放在堆内存中的对象，变量实际保存的是一个指针，这个指针指向另一个位置。每个空间大小不一样，要根据情况开进行特定的分配。


## 浅拷贝

简单的理解就是，将对象属性一一复制给新对象。

```
// 原始对象
var obj = {
	id: '1',
	name: '重庆市',
	child: [
		{id: '1-1', name: '沙坪坝区'},
		{id: '1-2', name: '南岸区'},
		{id: '1-3', name: '渝中区'}
	]
};

// 浅拷贝
units = {
	clone: function(obj){
		var newObj = {};
		for(i in obj){
			newObj[i] = obj[i];
		}
		return newObj;
	}
}

// 执行
var newObj = units.clone(obj);
console.log(newObj);
console.log(obj);
console.log("==========");

newObj.id = '02'
newObj.child.push({id: '1-4', name: '北碚区'});
console.log(newObj);
console.log(obj);
```

存在的问题：如果某一个属性是引用类型，那么拷贝后的对象和原始对象将引用同一对象，就会导致改变其中一个对象的值另一个对象的值也跟着变化


## 深拷贝

将对象的属性一一拷贝给新的对象，如果该属性是引用数据类型，需要递归遍历。

```
var obj = {
	id: '1',
	name: '重庆市',
	child: [
		{id: '1-1', name: '沙坪坝区'},
		{id: '1-2', name: '南岸区'},
		{id: '1-3', name: '渝中区'}
	]
};

// 深度拷贝
units = {
	deepClone: function(obj){
		// for in 循环在处理对象和数组的时候会有区别
		var newObj = obj.constructor === Array ? [] : {};

		for(i in obj){
			if(typeof obj[i] === 'object'){
				newObj[i] = this.deepClone(obj[i]);
			} else {
				newObj[i] = obj[i]
			}
		}
		return newObj;
	}
}

// 执行
var newObj = units.deepClone(obj);
console.log(newObj);
console.log(obj);
console.log("==========");

newObj.id = '02'
newObj.child.push({id: '1-4', name: '北碚区'});
console.log(newObj);
console.log(obj);
```





