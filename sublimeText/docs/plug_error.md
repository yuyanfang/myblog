

##错误提示

在安装插件过程中，ctrl + shift + p 时出现如下错误弹窗提示

```
There are no packages available for installation
```


##原因

我们的Intent服务提供者（ISP）不支持IPv6就会引发上述错误

##解决办法
```
Step 1:
Get IPv4 address of sublime.wbond.NET
Try this command line on terminal ping sublime.wbond.Net
Now you can get IPv4 address of sublime.wbond.net.
```

* 1.获取sublime.wbond.net的ipv4地址。 [在线ping工具](http://serve.netsh.org/pub/ping.php)

* 2.寻找mac 或 windows系统下面的hosts文件,按如下格式粘贴host配置

  ```
  格式： [查询到的ip]  +  [sublime.wbond.net]
  
  实例： 50.116.34.243   sublime.wbond.net  
  ```

