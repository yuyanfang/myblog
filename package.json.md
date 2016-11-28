```
{
  "name": "webpacksimpleproject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "autoprefixer": "^6.5.3",
    "babel-core": "^6.18.2",
    "babel-loader": "^6.2.7",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-react": "^6.16.0",
    "css-loader": "^0.26.0",
    "json-loader": "^0.5.4",
    "postcss-loader": "^1.1.1",
    "style-loader": "^0.13.1",
    "webpack": "^1.13.3",
    "webpack-dev-server": "^1.16.2"
  },
  "dependencies": {
    "react": "^15.4.0",
    "react-dom": "^15.4.0"
  }
}
```

## 插件

```
// 分析JSON文件并把它转换为JavaScript文件
json-loader


// 自动添加适应不同浏览器的CSS前缀
postcss-loader
autoprefixer


// 使你能够使用类似@import 和 url(...)的方法实现 require()的功能
css-loader

// 将所有的计算后的样式加入页面中
style-loader

// Babel其实是一个编译JavaScript的平台,babel-core是其核心插件
babel-core
babel-loader
babel-preset-es2015
babel-preset-react

// 本地开发服务器，这个本地服务器基于node.js构建，可以实现你想要的这些功能，
// 不过它是一个单独的组件，在webpack中进行配置之前需要单独安装它作为项目依赖
webpack-dev-server







```
