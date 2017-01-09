# array
## array类型
> 可以保存任意类型

例如：
```
var arr = [1, 'a', true]
```

## 检测数组

* instanceof 判断是否是数组

问题：单一上下文
```
    if(value instanceof Array){
    
    }
```

* isArray 判断是否是数组

```
    if(Array.isArray(value)){
        
    }

```

## 转换方法

* toLocalString()

* toString()

* valueOf()

* join()

```
var person1 = {
		toLocalString: function(){
			return 'toLocalString -> person1';
		},
		toString: function(){
			return 'toString -> person1';
		}
	};

	var person2 = {
		toLocalString: function(){
			return 'toLocalString -> person2';
		},
		toString: function(){
			return 'toString -> person2';
		}
	};

	var person = [person1, person2];
	alert(person)
	alert(person.toString());
	alert(person.toLocalString());
```

## 栈方法

> 后进先出[LIFO] 

* push
> 添加到数组末尾，并返回修改后的数组长度

* pop
> 删除最后一项，并返回该项的值


## 队列方法

> 先进先出 [FIFO]

* push

> 添加到数组末尾，并返回修改后的数组长度

* shift

> 删除第一项，并返回该项的值

* unshift

> 在数组第一项

## 重排序

* sort
> 默认：按升序排序

* reverse
> 默认: sort 的倒序排序

```
var values = [0, 1, 5, 10, 15]

values.sort();  // [0, 1, 10, 15, 5]
values.reverse(); // [5, 15, 10, 1, 0]

```


## 操作方法

* concat()

* slice()
> 不会影响原始数组

```
var arr = [1, 2, 3, 4, 5]
arr.slice(1); // [2, 3, 4, 5]
arr.slice(1, 4); // [2, 3, 4]
```

* splice()

> 删除

splice(start, number) 

> 插入

splice(start, 0, arg1, arg2);

> 替换

splice(start, number, arg1, arg2);



start: 起始位置

number: 删除或替换的项数

arg1... : 项

```

```


## 位置方法

* indexOf()

* lastIndexOf()


## 迭代方法

## 缩小方法

