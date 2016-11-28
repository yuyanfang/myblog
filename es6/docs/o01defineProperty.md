# Object.defineProperty()

方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。

语法

> Object.defineProperty(obj, prop, descriptor)

说明: 
```
参数

obj 需要定义属性的对象。 
prop 需定义或修改的属性的名字。
descriptor 将被定义或修改的属性的描述符。


返回值

返回传入函数的对象，即第一个参数obj


描述

该方法允许精确添加或修改对象的属性。一般情况下，我们为对象添加属性是通过赋值来创建并显示在属性枚举中（for...in 或 Object.keys 方法）， 但这种方式添加的属性值可以被改变，也可以被删除。而使用 Object.defineProperty() 则允许改变这些额外细节的默认设置。例如，默认情况下，使用  Object.defineProperty() 增加的属性值是不可改变的。

对象里目前存在的属性描述符有两种主要形式：数据描述符和存取描述符。数据描述符是一个拥有可写或不可写值的属性。存取描述符是由一对 getter-setter 函数功能来描述的属性。描述符必须是两种形式之一；不能同时是两者。
```

### 数据描述符

```
value		  该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
writable	  当且仅当该属性的 writable 为 true 时，该属性才能被赋值运算符改变。默认为 false。
```

### 存取描述符 [同时具有以下可选键值]
```
get 	一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。该方法返回值被用作属性值。默认为 undefined。
set		一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。该方法将接受唯一参数，并将该参数的新值分配给该属性。默认为 undefined。
```

### 共有[数据描述符 和 存取描述符 同事具有的属性]
```
configurable  当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，也能够被删除。默认为 false。  [对象的属性是否可以被删除]
enumerable    当且仅当该属性的 enumerable 为 true 时，该属性才能够出现在对象的枚举属性中。默认为 false。
```
---

记住，这些选项不一定是自身属性，如果是继承来的也要考虑。为了确认保留这些默认值，你可能要在这之前冻结 Object.prototype，明确指定所有的选项，或者将__proto__属性指向null。

```
// 使用 __proto__
Object.defineProperty(obj, "key", {
  __proto__: null, // 没有继承的属性
  value: "static"  // 没有 enumerable
                   // 没有 configurable
                   // 没有 writable
                   // 作为默认值
});


// 显式
Object.defineProperty(obj, "key", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static"
});

// 循环使用同一对象
function withValue(value) {
  var d = withValue.d || (
    withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null
    }
  );
  d.value = value;
  return d;
}

// ... 并且 ...
Object.defineProperty(obj, "key", withValue("static"));

// 如果 freeze 可用, 防止代码添加或删除对象原型的属性
// （value, get, set, enumerable, writable, configurable）
(Object.freeze||Object)(Object.prototype);
```


### 1.创建属性
> 如果对象中不存在指定的属性，Object.defineProperty()就创建这个属性。当描述符中省略某些字段时，这些字段将使用它们的默认值。拥有布尔值的字段的默认值都是false。value，get和set字段的默认值为undefined。定义属性时如果没有get/set/value/writable，那它被归类为数据描述符。

```
var o = {}; // 创建一个新对象

// Example of an object property added with defineProperty with a data property descriptor
Object.defineProperty(o, "a", {value : 37,
                               writable : true,
                               enumerable : true,
                               configurable : true});
// 对象o拥有了属性a，值为37




```

### 2.修改属性
> 如果属性已经存在，Object.defineProperty()将尝试根据描述符中的值以及对象当前的配置来修改这个属性。如果描述符的 configurable 特性为false（即该特性为non-configurable），那么除了 writable 外，其他特性都不能被修改，并且数据和存取描述符也不能相互切换。

- 如果一个属性的 configurable 为 false，则其 writable 特性也只能修改为 false。
- 如果尝试修改 non-configurable 属性特性（除 writable 以外），将会产生一个TypeError 异常，除非当前值与修改值相同。

#### Writable 属性

当属性特性（property attribute） writable 设置为false时，表示 non-writable，属性不能被修改。

```
var o = {}; // 创建一个新对象

Object.defineProperty(o, "a", { value : 37,
                                writable : false });

console.log(o.a); // 打印 37
o.a = 25; // 没有错误抛出（在严格模式下会抛出，即使之前已经有相同的值）
console.log(o.a); // 打印 37， 赋值不起作用。
```

#### Enumerable 特性

属性特性 enumerable 定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。

```
var o = {};
Object.defineProperty(o, "a", { value : 1, enumerable:true });
Object.defineProperty(o, "b", { value : 2, enumerable:false });
Object.defineProperty(o, "c", { value : 3 }); // enumerable defaults to false
o.d = 4; // 如果使用直接赋值的方式创建对象的属性，则这个属性的enumerable为true

for (var i in o) {    
  console.log(i);  
}
// 打印 'a' 和 'd' (in undefined order)

Object.keys(o); // ["a", "d"]

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false
```

#### Configurable 特性

configurable 特性表示对象的属性是否可以被删除，以及除 writable 特性外的其他特性是否可以被修改。

```
var o = {};
Object.defineProperty(o, "a", { get : function(){return 1;}, 
                                configurable : false } );

// throws a TypeError
Object.defineProperty(o, "a", {configurable : true}); 
// throws a TypeError
Object.defineProperty(o, "a", {enumerable : true}); 
// throws a TypeError (set was undefined previously) 
Object.defineProperty(o, "a", {set : function(){}}); 
// throws a TypeError (even though the new get does exactly the same thing) 
Object.defineProperty(o, "a", {get : function(){return 1;}});
// throws a TypeError
Object.defineProperty(o, "a", {value : 12});

console.log(o.a); // logs 1
delete o.a; // Nothing happens
console.log(o.a); // logs 1
```

### 3.添加多个属性和默认值

### 4.一般的 Setters 和 Getters

