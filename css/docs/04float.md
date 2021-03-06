#CSS清除浮动
> CSS清除浮动float的三种方法的总结，为什么要清除浮动？浮动会有哪些影响?

##现象display:block
![](../img/1.jpg)

代码结构
```
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
	<style>
		*{padding: 0;margin: 0;list-style: none;}
		ul{border: 1px solid #ccc;}
		ul li{width:100px; height: 100px; float: left;}
		.sub1{background: red;}
		.sub2{background: blue;}
		.sub3{background: pink;}
	</style>
</head>
<body>
	<ul class="parent">
		<li class="sub1"></li>
		<li class="sub2"></li>
		<li class="sub3"></li>
	</ul>
</body>
</html>
```

##解决方案
###方法一、添加新元素(clear:both)
```
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
	<style>
		*{padding: 0;margin: 0;list-style: none;}
		ul{border: 1px solid #ccc;}
		ul li{width:100px; height: 100px; float: left;}
		.sub1{background: red;}
		.sub2{background: blue;}
		.sub3{background: pink;}
		.clear{clear:both; height: 0; line-height: 0; font-size: 0;}
	</style>
</head>
<body>
	<ul class="parent">
		<li class="sub1"></li>
		<li class="sub2"></li>
		<li class="sub3"></li>
		<li class="clear"></li>
	</ul>
</body>
</html>
```

###方法二、父级div定义 overflow: auto（注意：作用于浮动元素的父亲）
> 原理：使用overflow属性来清除浮动有一点需要注意，overflow属性共有三个属性值：hidden,auto,visible。我们可以使用hiddent和auto值来清除浮动，但切记不能使用visible值，如果使用这个值将无法达到清除浮动效果，其他两个值都可以，auto对seo比较友好，hidden对seo不是太友好。

```
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
	<style>
		*{padding: 0;margin: 0;list-style: none;}
		ul{border: 1px solid #ccc;}
		ul li{width:100px; height: 100px; float: left;}
		.sub1{background: red;}
		.sub2{background: blue;}
		.sub3{background: pink;}
		.clear{overflow: auto;zoom:1;}
	</style>
</head>
<body>
	<ul class="parent clear">
		<li class="sub1"></li>
		<li class="sub2"></li>
		<li class="sub3"></li>
	</ul>
</body>
</html>
```



###方法三、:after 方法（注意：作用于浮动元素的父亲）

原理：利用:after和:before来在元素内部插入两个元素块，达到清除浮动的效果。其实现原理类似于clear:both方法，只是区别在于:clear在html插入一个div.clear标签，而父div利用其伪类clear:after在元素内部增加一个类似于div.clear的效果。下面来看看其具体的使用方法：

更改：
```
.parent {zoom:1;}    /*==for IE6/7 Maxthon2==*/
.parent :after {clear:both;content:'.';display:block;width: 0;height: 0;visibility:hidden;}   /*==for FF/chrome/opera/IE8==*/
```

完整：
```
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
	<style>
		*{padding: 0;margin: 0;list-style: none;}
		ul{border: 1px solid #ccc;}
		ul li{width:100px; height: 100px; float: left;}
		.parent {zoom:1;}    /*==for IE6/7 Maxthon2==*/
		.parent :after {clear:both;content:'.';display:block;width: 0;height: 0;visibility:hidden;}   /*==for FF/chrome/opera/IE8==*/
		.sub1{background: red;}
		.sub2{background: blue;}
		.sub3{background: pink;}
	</style>
</head>
<body>
	<ul class="parent">
		<li class="sub1"></li>
		<li class="sub2"></li>
		<li class="sub3"></li>
	</ul>
</body>
</html>
```



> 其中clear:both;指清除所有浮动；content:'.';display:block;对于FF/chrome/opera/IE8不能缺少，其中content（）可以取值也可以为空。visibility:hidden;的作用是允许浏览器渲染它，但是不显示出来，这样才能实现清楚浮动。










