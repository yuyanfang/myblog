# webpack 入门例子

> 最近用 webpack + vue 搭建了移动端单页面项目，想用两周时间把工具的使用到项目搭建认真梳理一下，写博客比想象中要难，希望能把自己想表达的意思表达出来。

官方解释：webpack是项目打包工具或模块管理工具

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

#### 1、编译单文件

1.1 创建目录结构和文件
```
mkdir tutorial 
cd  tutorial

touch entry.js
touch index.html
```

1.2 index.html
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

1.3 entry.js
```
document.write('<div class="box-one">hello webpack</div>');
```

1.4 运行
```
webpack ./entry.js ./bundle.js
```
---

#### 2、引用外部文件


1.1 创建文件
```
touch content.js
```

1.2 content.js

```
module.exports = "<div class='box-two'>It works from content.js</div>"
```

1.3 entry.js
```
document.write('<div class="box-one">hello webpack</div>');
document.write(require('./content.js'));
```

1.4 运行

```
webpack ./entry.js ./bundle.js
```
---


#### 3、lodaer的使用

说明:

- loader 可以简单的理解为项目在打包编译过程中的静态资源插件
- loader 可以分为 js、css、图片、json、文件、html等类别

此处添加一个外部css文件，使用css-loader 和 style-loader

3.1 安装依赖创建文件
```
// 安装npm依赖 css-loader style-loader
npm install css-loader --save-dev
npm install style-loader --save-dev

touch index.css
```

3.2 index.css
```
body{ background: #eee; font-size: 12px; font-family: '幼圆'}
.box-one{ width: 200px; height: 200px; line-height: 200px; vertical-align: middle; text-align: center; background: yellow; border-radius: 5px;}
.box-two{margin-top: 10px; width: 200px; height: 200px; line-height: 200px; vertical-align: middle; text-align: center; background: pink; border-radius: 5px;}
```

3.3 entry.js
```
require('!style!css!./index.css');

document.write('<div class="box-one">hello webpack</div>');
document.write(require('./content.js'));
```

3.4 运行
```
// 通过webpack 的 --module-bind 参数
webpack ./entry.js ./bundle.js --module-bind='css=style!css'
```

---


#### 4. 使用webpack.config.js配置文件

刚才的例子中用到了 webpack 的 --module-bind参数对文件进行了编译，显然这样做非常麻烦，项目越大困难越大，我们引入 webpack.config.js文件

4.1 webpack.config.js
```
module.exports = {
	entry: './entry.js',
	output: {
		path: __dirname + "/dist",
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: 'style!css'}
		]
	}
};

说明：
	entry   入口文件
	output  输出文件
	module	模块加载
```

4.2 entry.js
```
require('./index.css');

document.write('<div class="box-one">hello webpack</div>');
document.write(require('./content.js'));
```

4.3 运行
```
webpack ./entry.js ./bundle.js
```

#### 5.使用webpack-dev-server

说明：

- 简单来说，webpack-dev-server就是一个小型的静态文件服务器。使用它，可以为webpack打包生成的资源文件提供Web服务
- http://localhost:8080/webpack-dev-server/ 通过该链接访问本地启用的服务器
- webpack-dev-server 生成的包并没有放在你的真实目录中,而是放在了内存中.也就是说在项目目录中没有输出文件。


5.1 安装依赖:
```
npm install webpack-dev-server --save-dev
```

5.2 运行:
```
// 指令
webpack-dev-server

// 命令行提示
baidu@baidudeMacBook-Pro:~/Desktop/github/myblog/webpack/examples/tutorial01$ webpack-dev-server

http://localhost:8080/webpack-dev-server/
webpack result is served from /
content is served from /Users/baidu/Desktop/github/myblog/webpack/examples/tutorial01
Hash: a6728a32c332fb88598a
Version: webpack 1.13.3
Time: 766ms
    Asset     Size  Chunks             Chunk Names
bundle.js  12.2 kB       0  [emitted]  main
chunk    {0} bundle.js (main) 10.3 kB [rendered]
    [0] ./entry.js 163 bytes {0} [built]
    [1] ./index.css 895 bytes {0} [built]
    [2] ./~/css-loader!./index.css 527 bytes {0} [built]
    [3] ./~/css-loader/lib/css-base.js 1.46 kB {0} [built]
    [4] ./~/style-loader/addStyles.js 7.15 kB {0} [built]
    [5] ./content.js 70 bytes {0} [built]
webpack: bundle is now VALID.
```












