#angular-directive
> angularjs中最重要的三个部分双向数据绑定、指令、路由。

angularjs中指令是非常重要的一部分，框架本身有很多指令，但这些指令还不能满足日常开发需求，所以往往需要我们自己定义指令。


##指令的表现形式

### 元素

```
<hello></hello> 或者 <hello/>
```


### 属性

```
<div hello></div>
```

### class(类)

```
<div class="hello"></div>
```

### 注释

```
<!-- directive: hello -->
注意： directive:  与 hello 之间有一个空格
```

## 指令的定义

最简单的定义方式：
```
.directive('hello', function(){
	restrice: 'EACM',
	template: '<button>点击</button>'
});
```
directive(name, fun) 方法接收两个参数 第一个是名称，第二个是返回指令对象的函数。上面的例子中使用了两个属性

restrice [string]：指令在HTML中可以使用什么表现形式

template [string or function]: 该指令规定了被angularjs 编译(complice)和链接(link)后生成的HTML标记。这个指令可以简单到只有一个字符串文本，也可以特别复杂，当该属性的值为function的时候，那么该方法返回的就是代表模板的字符串，同时也可以在里面使用{{}}这个表达式。

```
template: function () {
    return '<button>点击</button>';
}
```

但是在一般情况下，template这个属性都会被templateUrl取代掉，用它来指向一个外部的文件地址，所以我们通常把模板放在外部的一个HTML文件中，然后使用templateUrl来指向他。
























