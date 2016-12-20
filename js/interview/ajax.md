####Ajax基础详解
定义：全称：Asynchronous JavaScript and XML（用异步的形式的JavaScript去操作XML)  用来传输进行数据交互 其实就是拿数据发数据。

应用：我们来想想我们编写的HTML代码的时候，当我们改变了里面内容了并且想看效果的时候，是不是先保存，然后去浏览器刷新页面，而Ajax就是做到当页面内容发生改变的时候能不刷新页面，就能把改变告知我们。比如，我们注册的时候信息填写错误，是不是没刷新页面就能直接看到信息提示，比如我们玩QQ的时候，有什么消息都会提醒你，丝毫没有刷新页面，丝毫没有影响你干别的事情，这就是Ajax做的事情。

> 当然首先，你得知道是把代码放在服务器下运行的，打开的时候不能用本地的地址，要用localhost/。。这种形式才是在服务下访问的。要是这不了解的话，可以先自行百度下。


```
var oBtn = document.getElementById('btn');
    oBtn.onclick = function(){
        var xhr = new XMLHttpRequest();  //创建Ajax对象
        xhr.open('get','1.txt',true);  //设置请求信息    
        xhr.send();//提交请求

        //等待服务器返回内容
         xhr.onreadystatechange = function() {
                if ( xhr.readyState == 4 ) {
                       alert( xhr.responseText ); //弹出内容
                   } 
          } 
     }

var xhr = new XMLHttpRequest(); //创建Ajax对象

ActiveXObject(‘Microsoft.XMLHTTP’) 
//ActiveXObject: IE6下插件的总称，包含很多插件
//Microsoft.XMLHTTP：具体某个插件的名字
```

所以我们需要对上面做一个兼容性的处理：

```
var xhr = null;
if(window.XMLHttpRequest){ //加window是因为如果直接判断IE下不存在的东西会报错，加了window，就是在判断一个属性是否存在，这样就不会报错了（当然我们都知道所有的东西都在window对象下，所以这样判断是有效的）
    xhr = new XMLHttpRequest();
}else{
   xhr = new ActiveXObject(‘Microsoft.XMLHTTP’);
}
```

接着看

```
xhr.open('get','1.txt',true); //设置请求信息

Open方法
三个参数的含义
1、提交方式 Form-method(get/post)
2、提交地址 Form-action
3、是否异步，是为(true)
```

get/post 这两种的区别



#### 这里我们不用ajax的方式，先直接通过传统的表单提交数据来分析。

> 传统的表单提交就是在表单里面设置提交的一些参数，用户的信息输入提交，会跳到指定后台的页面。

表单的参数：

action：提交到哪里 默认是当前页面

method：提交方式 默认是Get

enctype: 提交的数据格式，默认是application/x-www-form-urlencoded

栗子：
```
1]html页面
<form action="1.get.php">
    <input type="text" name="username">
    <input type="text" name="age">
    <input type="submit" value="按钮" />
</form>

2]php页面
<?php
header('content-type:text/html;charset="utf-8"'); //设置编码格式，以及文档类型
error_reporting(0);

$username = $_GET['username'];//获取get请求方式的数据
$age = $_GET['age'];

echo "你的名字：{$username}，年龄：{$age}"; //输出内容
```

观察实验结果，当点击按钮，页面会跳到1.get.php页面，把内容输出。并且观察上面的地址栏，会发现我们输入的信息被放在了地址栏上。

##### 其实整个GET请求过程是这样的。

> 1 输入用户信息，点击提交，跳到指定后台的页面

> 2 GET方式会把用户输入的数据名称和对应的值以这样的格式(username=value&age=value )串连起来，放在指定后台页面的地址栏的问号（？）后面。

> 3 后台的代码  通过PHP语言中的$_GET方法，获取到地址栏中的用户信息，$_GET['username']; $_GET['age'];然后赋给变量，输出信息。


##### 由此，我们可以知道GET方式：

> 1 把数据名称和对应的值串连(username=value&age=value ),然后把数据放到指定页面的url地址？后面。

> 2 我们其实完全可以在后台页面的地址栏上手动更改用户信息，相应的输出也会变化。因为后台代码是从地址栏中获取的信息。所以也因为这样，这种传输方式，是不安全的，

##### GET方式还有一些其他的特点：

> 3 因为url有长度限制原因 Get请求的方式有数据量限制，每个浏览器都不同，所以不要用这种方式传递过长的数据。不然会被截取，导致传递数据不完整。
> 4 只能传递字符串类型 



#### POST方式

```
1] html页面

<form action="1.get.php" method="post">
    <input type="text" name="username">
    <input type="text" name="age">
    <input type="submit" value="按钮" />
</form>


2］php 页面

<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$username = $_POST['username'];//不同的请求方式方法不同，$_POST方法专门用来获取POST方式请求的数据
$age = $_POST['age'];
echo "你的名字：{$username}，年龄：{$age}";
```

输入页面，跟前面一样就没有截取，输出信息页面，我们可以看到，地址栏上已经没有用户信息了，但页面还是输出了用户信息。那从哪里看出传递的过程呢？

其实在传递数据的过程中，浏览器还会向服务端（后台）发送一个请求头包含一些请求的信息（GET请求也有头部信息），我们打开开发者工具，找到网络就可以看到我们的请求，点进去就是具体内容，可以看到一些请求信息，有请求的编码格式，还有请求地址等，具体可以自己私下了解。

我们看第三张图，可以看到请求的数据，上面的其实是浏览器已经按照某种格式输入的信息，下面的源代码才是实际传递的信息，可以看到串连的格式和GET请求是一样的，用户名后面的乱码是编码了，当传递的是中文的时候，才会进行这样的编码。


由此我们可以知道

##### Post请求

> 1 数据的串连格式和Get请求是一样的
> 2 通过请求头信息 通过浏览器内部传输:


##### 还有别的区别就是
> 3 传输数据量 Post理论上无限
> 4 可以传递多种数据类型（文本类型，二进制）
> 还有一点是后端获取数据格式不仅有 $_GET,  $_POST还有一个 3 $_REQUEST  可以获取任何提交方式的数据 。


##### 我们需要注意的是数据传输方式 和 数据获取方式 必须保持一致才能成功获取
> 同步：就是一种阻塞模式，比如代码var a =1 ;alert(a);这就是一种同步，必须执行了第一种var a =1，你才会弹出a的值。
> 缺点：一般当你后面的代码需要用到前面的东西的时候 适合用同步 ，但用的很少，因为后面的代码都要等前面，体验是不好的。

> 异步：就是一种非阻塞模式，最明显的例子，就是定时器，当我们写了一个30s后执行的定时器的时候，在30S内其实后面的代码是可以执行的，而不是过了30s后面代码才能执行，这就是一种异步。
> 缺点：当你后面的代码需要用到前面的东西的时候 如果用异步，那么后面的代码会在前面还没加载好就出来，可能会有问题。幸运的是我们可以解决。
> 解决：当你后面的代码需要用到前面的东西的时候，可以用条件判断来决定这些代码的执行，如果条件达成了就可以执行。

```
var oBtn = document.getElementById('btn');
    oBtn.onclick = function(){
    var xhr = null;
   if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
   }else{
      xhr = new ActiveXObject(‘Microsoft.XMLHTTP’);
   }
 xhr.open('get','1.txt',true); //设置请求信息 
 xhr.send();//提交请求
 //等待服务器返回内容 这里后面会具体讲，大概就是监听服务器的状态，先简单了解即可
  xhr.onreadystatechange = function() { 
           if ( xhr.readyState == 4 ) {  //如果内容响应成功，并解析完成
                alert( xhr.responseText ); //弹出内容  
          } 
     }
 } 

```     
>   在上面的代码中xhr.send()提交请求是需要时间的，所以必须要等到一定时间提交成功后，我们后面的才能正确获取到内容，所以这就是后面的代码正确执行，依赖于前面，但是如果用同步的话，我们后面那些不依赖这些前面代码的代码也没办法执行，体验就不好了，所以我们选择用异步，而对于这些依赖前面代码执行的代码，我们就进行判断

>   if ( xhr.readyState == 4 )就是判断如果数据响应到了，收到了，再弹出内容。（如果我们不判断，按照异步的原理，就会立马弹出来，获取数据需要时间，因为实际还没获取到数据，所以会弹出空，怕误解，所以这里我再强调下）


```
    readyState代表着请求过程的不同状态
    
    0    （初始化）还没有调用open()方法
    1    （载入）已调用send()方法，正在发送请求
    2    （载入完成）send()方法完成，已收到全部响应内容
    3    （解析）正在解析响应内容（因为收到的内容 并不是人能看懂的内容，所以需要解析）
    4    （完成）响应内容解析完成，可以在客户端调用了
```

上面的代码基本已经了解了原理，不过当然不是最完善的，这个时候，我们虽然监控到了状态，响应了内容，但是内容不一定就是对的呀，比如可能内容错了，可能我们请求了一个不存在的页面，这个时候readyState是无法判断错误的，我们需要知道内容是否正常，这个时候另一个属性status属性就登场了，它代表的不是Ajax状态，而是服务器(请求资源)的状态，http状态码。状态码有很多，其中比较出名的就是200，成功状态码，和404Not Found.其他的大家私下自行查阅。


```
var oBtn = document.getElementById('btn');
    oBtn.onclick = function(){
        var xhr = null;
        if(window.XMLHttpRequest){
             xhr = new XMLHttpRequest();
         }else{
        xhr = new ActiveXObject(‘Microsoft.XMLHTTP’);
        }
        xhr.open('get','1.txt',true); //设置请求信息 
       xhr.send();//提交请求
        //等待服务器返回内容 
       xhr.onreadystatechange = function() { 
             if ( xhr.readyState == 4 ) { 
                    if(xhr.status == 200) {//如果响应成功，并且服务器相应内容正确
                          alert( xhr.responseText );//弹出内容  
                      }else{alert('出错了' + xhr.status); //否则告知出错并弹出错误原因
              } 
       }
 }
```


##### Ajax的大概流程就是这样的。当然还存在一些细节方面的问题需要注意的，继续往下看把

工作当中 向后端传递数据存在的问题：
##### GET请求
> 1 缓存问题：后台更改了 因网址未变 所以会去缓存提取内容 而不是后台

```
xhr.open('get','1.get.php?username=fangfang&age=25',true);

xhr.open('get','1.get.php?username=fangfang&age=25&'+new.Date.getTime(),true);  // 解决缓存问题

xhr.open('get','1.get.php?username=fangfang&age=25&t='+new.Date.getTime(),true); // 缓存
```


##### post 请求
```
1 xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
2 xhr.send('username=fangfang&age=25&');

无缓存问题，因为单单是往服务器提交数据，提交数据是不会被缓存的，获取数据才会被缓存。这就是web的机制。
```

##### 数据接收

> stringify() : 把json对象转化成字符串 转换后的字符串是严格的json格式

> parse() : 把字符串转成对象，可以把后端返回的字符串 转成JSON格式，对于json,只能转换严格json格式的字符串，字符串的键 比较用双引号括起来 像这样 {"username":"le","age":32}


```
<!DOCTYPE HTML>
<html>
<head>
<meta charset=utf-8">
<title>无标题文档</title>
<!--<script src="jquery.js"></script>-->
<script>
window.onload = function() {
    var oBtn = document.getElementById('btn'); 
    oBtn.onclick = function() {
        var xhr = null;
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }else{
           xhr = new ActiveXObject(‘Microsoft.XMLHTTP’);
        }     
        xhr.open('get','getNews.php',true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if ( xhr.readyState == 4 ) {
                if ( xhr.status == 200 ) {
                   //alert( xhr.responseText );  后端传来的格式是一个数组里面很多条json 自己可以测试下
                  var data = JSON.parse( xhr.responseText ); // 将后台获取的内容转为json类型  每一个json里面有两个键：title和date
                  var oUl = document.getElementById('ul1'); //获取显示新闻列表的节点
                  var html = '';
                  for (var i=0; i<data.length; i++) {   // 循环所有的json数据，并把每一条添加到列表中
                        html += '<li><a href="">'+data[i].title+'</a> [<span>'+data[i].date+'</span>]</li>';
                   }
                   oUl.innerHTML = html; //把内容放在页面里
                } else {
                    alert('出错了,Err：' + xhr.status);
                }
            }
            
        }
        
    }
}
</script>
</head>

<body>
    <input type="button" value="按钮" id="btn" />
    <ul id="ul1"></ul>
</body>
</html>
```


```
<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$news = array(
    array('title'=>'女总理默克尔滑雪时摔倒 骨盆断裂','date'=>'2014-1-6'),
    array('title'=>'驻英外交官撰文互称对方国家为"伏地魔"','date'=>'2014-1-6'),
    array('title'=>'安倍:望与中国领导人会面 中方:你关闭了大门','date'=>'2014-1-6'),
    array('title'=>'揭秘台湾驻港间谍网运作 湖北宜昌副市长被查','date'=>'2014-1-6'),
    array('title'=>'：嫦娥三号是货真价实的中国创造','date'=>'2014-1-6'),
 

);
echo json_encode($news);
```



#### ajax封装
```
function ajax(method, url, data, success) {
    var xhr = null;
    try {
        xhr = new XMLHttpRequest();
    } catch (e) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    
    if (method == 'get' && data) {
        url += '?' + data;
    }
    
    xhr.open(method,url,true);
    if (method == 'get') {
        xhr.send();
    } else {
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
    
    xhr.onreadystatechange = function() {
        
        if ( xhr.readyState == 4 ) {
            if ( xhr.status == 200 ) {
                success && success(xhr.responseText); //如果函数存在就执行后面的  &&的执行过程就是前面的是真，才执行后面的。
            } else {
                alert('出错了,Err：' + xhr.status);
            }
        }
        
    }
}
```
















