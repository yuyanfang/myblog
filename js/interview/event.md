
#### 一、事件流
1.事件冒泡

2.事件捕获

3.DOM事件流

#### 二、事件处理程序

1.HTML 级事件处理程序

2.DOM0 级事件处理程序

3.DOM2 级事件处理程序

4.IE   级事件处理程序

5.跨浏览器的事件处理程序


#### 三、事件对象

1.DOM中的事件对象

2.IE中的事件对象

3.跨浏览器的事件对象

```
var EventUtil = {
	addHandler: function(element, type, handler) {

	},
	removeHandler: function(element, type, handler) {

	},
	getEvent: function(event) {
		return event ? event : window.event;
	},
	getTarget: function(event) {
		return event.target || event.srcElement;
	},
	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = true;
		}
	},
	stopPropagation: function(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}
}
```

#### 四、事件类型

1.UI事件

2.焦点事件

3.鼠标与滚轮事件

4.键盘与文本事件

5.复合事件

6.变动事件

7.html5事件

8.设备事件

9.触摸与手势事件

1) load事件
> 当页面完全加载后（包括图像、js、css等外部资源），就会触发window上面的load事件。




#### 五、内存和性能

> javascript中添加到页面上的事件处理程序数量将直接关系到页面的整体性能。
1.每个函数都是对象，都会占用内存，内存中的对象越多，性能越差

2.事先指定所有事件处理程序会导致DOM访问次数，会延迟整个页面的交互时间


##### 事件委托
> 事件委托利用的是事件冒泡，只指定一个事件处理程序，就可以管理某一类型的事件。

最好绑定在document上

1.doucment对象很快可以访问，而且可以在页面生命周期的任何时点上为它添加事件处理程序。换句话说，只要可单击的元素呈现在页面上，就可以立即具备适当的功能。

2.设置事件处理程序时间更少。只添加一个事件处理程序所需要的DOM引用更少，所花的时间也更少。

3.整个页面占用的内存空间更少，能够提升整体性能。

> 注:最适合采用事件委托技术的事件包括 click、mousedown、mouseup、keydown、keyup、keypress。虽然mouseover和mouseout事件也冒泡，但要适当处理它们并不容易，而且经常需要计算元素位置。


##### 移出事件处理程序
> 每当事件处理程序指定给元素时，运行中的浏览器代码与支持页面交互的javascript代码之间就会建立一个连接。连接越多页面执行越慢。可以通过事件委托技术限制建立的连接数量。另外在不需要的时候移出事件处理程序。

“空事件处理程序”是造成web应用程序内存与性能问题的主要原因

1.节点移出 [例如使用 removeChild()、replaceChild()方法但更多的是实用innerHTML替换页面中某一部分的时候] 有的浏览器，尤其是IE在这种情况下不会做出恰当的处理，它们很有可能会将对元素和对事件处理的引用都保存在内存中。如果你知道某个元素即将被移除，那么最好手工移除事件处理程序。

2.卸载页面 [页面卸载之前通过unonload事件处理程序移除所有事件处理程序，事件委托技术表现出它的优势，需要跟踪的事件处理程序越少，移除它们就越容易，只要通过onload事件处理程序添加的东西，最后都要通过onunload事件处理程序移除]

> 注：使用onunload事件处理程序意味着页面不会被缓存在bfcache中，如果在意这个问题，那么只能在IE中通过onunload来移除事件处理程序










