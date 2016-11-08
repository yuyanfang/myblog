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

1、 restrice [string]：指令在HTML中可以使用什么表现形式

2、 template [string or function]: 该指令规定了被angularjs 编译(compile)和链接(link)后生成的HTML标记。这个指令可以简单到只有一个字符串文本，也可以特别复杂，当该属性的值为function的时候，那么该方法返回的就是代表模板的字符串，同时也可以在里面使用{{}}这个表达式。

```
template: function () {
    return '<button>点击</button>';
}
```

但是在一般情况下，template这个属性都会被templateUrl取代掉，用它来指向一个外部的文件地址，所以我们通常把模板放在外部的一个HTML文件中，然后使用templateUrl来指向他。


3、 priority[number]属性，这个属性是来规定自定义的指令的优先级的，当一个DOM元素上面有一个以上的指令的时候，就需要去比较指令的优先级了，优先级高的指令先执行。这个优先级就是用来在执行指令的compile函数前，先排序的，那么关于 compile 这个函数，我们会在下面仔细的说下。

4、 terminal[boolean]属性，该参数用来定义是否停止当前元素上比本指令优先级低的指令，如果值为true，就是正常情况，按照优先级高低的顺序来执行，如果设置为false，就不会执行当前元素上比本指令优先级低的指令。

5、 replace[boolean]属性，这个属性用来规定生成的HTML内容是否会替换掉定义此指令的HTML元素。


6、 link[function]属性，在上面的例子中，我们自定义的指令其实没有多大意义，这只是一个最简单的指令，有好多的属性我们都没有为他定义，所以没有多大用途。比如这个link函数，它包括三个参数：scope、element、attrs。这个link函数主要是用来添加对DOM元素的事件监听、监视模型属性变化、以及更新DOM的。它里面三个参数：

	






















