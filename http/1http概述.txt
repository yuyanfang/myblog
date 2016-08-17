#1.HTTP概述
> web客户端和服务器端是如何通信的
> 【web内容的】资源来自何方
> web事务是怎么工作的
> HTTP通信使用的报文格式
> 底层TCP网络传输
> 不同的HTTP协议变体
> 因特网上安装的大量HTTP组件中的一部分

##1.1HTTP-因特网上的多媒体信使
HTTP使用的是可靠的数据传输协议，不会被损坏或产生混乱。用户和开发者都不用担心其完整性

##1.2web客户端和服务器
web内容都是存储在web服务器上的，web服务器使用的是HTTP协议，也叫HTTP服务器，这些HTTP服务器存储了因特网中的数据，如果客户端向服务器端发出HTTP请求，服务器会在HTTP响应中回送所请求的数据。

##1.3资源
web服务器是web资源的宿主。web资源是web内容的源头。

###1.3.1媒体类型
因特网上有数千种不同的数据类型，HTTP会给每一种需要通过web传输的对象打上名位MIME【多用途因特网邮件扩展】类型的数据格式。最初是为了电子邮件之间传输报文时存在的问题。

MIME是一种文本标记【主类型/子类型】常见的有100多种
```
html文档: text/html
ASCII文档: text/plain
JPEG文件: image/jpeg
GIF文件：image/gif
```

###1.3.2 URI
(URI)统一资源标示符【世界范围内唯一标示并定位资源】
例如：https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/tipsplus/js/min_tips_e4616384.js

###1.3.3 URL
统一资源定位符，是资源标示最常见的形式，URL描述了特定服务器上某资源的位置。可以明确说明[协议][机器][路径]
```
schema + (host + port) + 资源
协议	
机器名
资源
```
说明：几乎所有的URI 都是 URL

###1.3.4 URN
统一资源名


区别：
```
uri: http://bitpoetry.io/posts/hello.html#intro
url: http://bitpoetry.io/posts/hello.html
urn: bitpoetry.io/posts/hello.html#intro
```


##1.4事务
一条HTTP事务是由：客户端请求 + 服务器返回数据 + (HTTP报文的格式化数据块)



