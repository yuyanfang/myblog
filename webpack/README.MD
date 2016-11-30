# webpack 指南

> 需要在当前环境安装nodejs

学习这个例子后你将学会：

- 安装webapck
- 使用webpakck
- 使用[loader](http://www.cnblogs.com/leinov/p/5330944.html)加载器
- 学会使用 [webpack-dev-server](http://www.jianshu.com/p/941bfaf13be1)

### 安装 webpack

```
npm install webpakck -g 
```
### 开始使用webpack

####1、编译单文件
```
mkdir tutorial 
cd  tutorial

touch entry.js
touch index.html
```

index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>1-webpack-tutorial</title>
</head>
<body>

</body>
<script type="text/javascript" src="bundle.js"></script>
</html>
```

entry.js
```
document.write('<div class="box-one">hello webpack</div>');
```
运行:
```
webpack ./entry.js ./bundle.js
```

#### 2、引用外部文件

```
touch content.js
```

content.js

```
module.exports = "<div class='box-two'>It works from content.js</div>"
```

entry.js

```
document.write('<div class="box-one">hello webpack</div>');
document.write(require('./content.js'));

运行

```
webpack ./entry.js ./bundle.js
```

#### 3、lodaer的使用

```
// 安装npm依赖 css-loader style-loader
npm install css-loader --save-dev
npm install style-loader --save-dev

touch index.css
```

index.css
```
body{ background: #eee; font-size: 12px; font-family: '幼圆'}
.box-one{ width: 200px; height: 200px; line-height: 200px; vertical-align: middle; text-align: center; background: yellow; border-radius: 5px;}
.box-two{margin-top: 10px; width: 200px; height: 200px; line-height: 200px; vertical-align: middle; text-align: center; background: pink; border-radius: 5px;}
```

entry.js
```
require('!style!css!./index.css');

document.write('<div class="box-one">hello webpack</div>');
document.write(require('./content.js'));
```

运行:
```
webpack ./entry.js ./bundle.js
```










