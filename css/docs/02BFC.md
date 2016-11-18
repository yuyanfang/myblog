
#一、BFC是什么？

## BFC 定义

BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

##BFC布局规则：
```
1]内部的Box会在垂直方向，一个接一个地放置。
2]Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
3]每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
4]BFC的区域不会与float box重叠。
5]BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
计算BFC的高度时，浮动元素也参与计算
```

# 二、哪些元素会生成BFC?

```
1]根元素
2]float属性不为none
3]position为absolute或fixed
4]display为inline-block, table-cell, table-caption, flex, inline-flex 
4]overflow不为visible
```

#三、BFC的作用及原理

1. 自适应两栏布局

2. 清除内部浮动

3. 防止垂直 margin 重叠

例如：
```
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
</head>
<body>
	<style>
		*{padding:0px;margin: 0px;list-style: none;}
		.box{width: 300px;height: 200px;}
		.aside{float: left;width: 100px;height: 150px;background: yellow;}
		.main{height: 200px;background: pink; overflow: hidden;}
	</style>
	<div class="box">
		<div class="aside"></div>
		<div class="main"></div>
	</div>
</body>
</html>
```
