#Package Control插件安装

## 前言
在使用sublime text过程中，我们经常会用到各种插件提高工作效率。

## 说明
Package Control 插件是一个方便 Sublime text 管理插件的插件，但因为 Sublime Text 3 更新了 Python 的函数，API不同了，导致基于 Python 开发的插件很多都不能工作，Package Control 原来的安装方法都失效了

## 常用安装方法

### 1.代码安装（python代码）

从菜单 View - Show Console 或者 ctrl + ~ 快捷键，调出 console。将以下 Python 代码粘贴进去并 enter 执行，不出意外即完成安装

sublime text3 
```
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())
```

sublime text2

```
import urllib2,os; pf='Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler( ))); open( os.path.join( ipp, pf), 'wb' ).write( urllib2.urlopen( 'http://sublime.wbond.net/' +pf.replace( ' ','%20' )).read()); print( 'Please restart Sublime Text to finish installation')
```

### 2.下载安装

* 1.点击Preferences > Browse Packages菜单
* 2.进入 Installed Packages 目录
* 3.下载[ Package Control.sublime-package](https://sublime.wbond.net/Package%20Control.sublime-package) 如果下载不了，可以去github [package_control](https://github.com/wbond/package_control) 点击右侧clone or download 按钮选择download zip下载后重命名为package control，粘贴进Installed Packages
* 4.重启sublime
