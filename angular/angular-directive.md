#angular-directive
> angularjs中最重要的三个部分双向数据绑定、指令、路由。

angularjs中指令是非常重要的一部分，框架本身有很多指令，但这些指令还不能满足日常开发需求，所以往往需要我们自己定义指令。


##指令的表现形式

### 元素

```
<hello></hello> 或者 <hello/>
```


### 属性

```
<div hello></div>
```

### class(类)

```
<div class="hello"></div>
```

### 注释

```
<!-- directive: hello -->
注意： directive:  与 hello 之间有一个空格
```

## 指令的定义

最简单的定义方式：
```
.directive('hello', function(){
	restrice: 'EACM',
	template: '<button>点击</button>'
});
```
directive(name, fun) 方法接收两个参数 第一个是名称，第二个是返回指令对象的函数。上面的例子中使用了两个属性

1、 restrice [string]
	
	指令在HTML中可以使用什么表现形式

2、 template [string or function]
	
	该指令规定了被angularjs 编译(compile)和链接(link)后生成的HTML标记。这个指令可以简单到只有一个字符串文本，也可以特别复杂，当该属性的值为function的时候，那么该方法返回的就是代表模板的字符串，同时也可以在里面使用{{}}这个表达式。

```
template: function () {
    return '<button>点击</button>';
}
```

但是在一般情况下，template这个属性都会被templateUrl取代掉，用它来指向一个外部的文件地址，所以我们通常把模板放在外部的一个HTML文件中，然后使用templateUrl来指向他。


3、 priority[number]属性
	
	这个属性是来规定自定义的指令的优先级的，当一个DOM元素上面有一个以上的指令的时候，就需要去比较指令的优先级了，优先级高的指令先执行。这个优先级就是用来在执行指令的compile函数前，先排序的，那么关于 compile 这个函数，我们会在下面仔细的说下。

4、 terminal[boolean]属性
	
	该参数用来定义是否停止当前元素上比本指令优先级低的指令，如果值为true，就是正常情况，按照优先级高低的顺序来执行，如果设置为false，就不会执行当前元素上比本指令优先级低的指令。

5、 replace[boolean]属性
	
	这个属性用来规定生成的HTML内容是否会替换掉定义此指令的HTML元素。


6、 link[function]属性
	
	在上面的例子中，我们自定义的指令其实没有多大意义，这只是一个最简单的指令，有好多的属性我们都没有为他定义，所以没有多大用途。比如这个link函数，它包括三个参数：scope、element、attrs。这个link函数主要是用来添加对DOM元素的事件监听、监视模型属性变化、以及更新DOM的。它里面三个参数：


```
一：scope参数，在我们没有为指令定义scope属性的时候，那么他代表的就是父controller的scope。

二：element参数，就是指令的jQLite(jQuery的子集)包装DOM元素。如果你在引入AngularJS之前引入了jQuery，那么这个元素就是jQuery元素，而不是jQLite元素。由于这个元素已经被jQuery/jQLite包装了，所以我们就在进行DOM操作的时候就不需要再使用 $()来进行包装。

三：attrs参数，它包含了该指令所在元素的属性的标准化参数对象。
```

7、scope[boolean or object]属性
	
	该属性是用来定义指令的scope的范围，默认情况下是false，也就是说该指令继承了父 controller 的 scope， 可以随意的使用父 controller 的 scope 里的属性，但是这样的话就会污染到父 scope 里的属性，这样是不可取的。所以我们可以让 scope 取以下两个值：true 和 {}。

当为true的时候，表示让Angular给指令创建一个继承于父 scope 的 scope。
```
	var myapp=angular.module('myapp',[])
	
	.controller('myctrl',['$scope', function ($scope) {
		$scope.color='red';
	}])

	.directive('hello', function () {
		return{
			restrict:'AECM',
			replace:true,
			template:'<button ng-click="sayhello()" style="background-color: {{color}}">click me</button>',
			scope:true，
			link: function (scope,elements,attrs) {
				elements.bind('click', function () {
					elements.css('background-color','blue');
				})
			}
		}
	})
```

这里我们为父scope定义了一个color的属性，并赋值为red，在hello指令的scope属性中，我们给了true，所以angular就为这个指令创建了一个继承于父scope的scope，然后在template属性中，我们用{{}}使用了从父scope中继承过来的color属性，所以按钮会是红色的。


当为{}的时候，表示创建一个隔离的scope，不会继承父scope的属性。但是在有的时候我们也要需要访问父scope里的属性或者方法，那么我们应该怎么办呢。angular早就为我们想到了这一点，有以下的三个办法可以让我们记性上面的操作：

#### 一：使用 @ 实现单向绑定

如果我们只给 scope 的这个 {} 值的话，那么上面代码的按钮的背景色将会是灰色的。

而如果我们需要使用父 scope 的 color 属性的时候，我们可以这样写：
```
scope{
	color:'@color'
}
```

```
<hello color="{{color}}"></hello>
```

这里有两点需要注意：

1、scope 里的属性 color 代表的是模板 {{}} 这个表达式里面的 color，两者必须一致。

2、scope 里的属性 colo r的值，也就是 @ 后面的 color，表示的是下面的HTML元素里的属性color


所以这两者也必须一致，当这里的属性名和模板里表达式{{}}里面使用的名称相同的话，就可以省略掉@后面的属性名了，然后写成下面的形式。

```
scope{
  color:'@'
}
```

从指令中 scope 的值可以看出，指令模板中的表达式 {{}} 里的color的指向的是当前元素元素的color属性，这个color属性的值就是父scope的属性color的值。父scope把他的color属性值传递给了当前元素的color属性，然后color属性又把值传递给了模板中表达式里的color，这个过程是单向的。


#### 二：使用=实现双向绑定

```
.directive('hello', function () {
   return{
    restrict:'AECM',
    replace:true,
    template:'<button style="background-color: {{color}}">click me</button>',
    scope:{
     color:'='
    },
    link: function (scope,elements,attrs) {
     elements.bind('click', function () {
	      scope.$apply(function () {
	       scope.color='pink';
	      })
     })
    }
   }
  })


  <hello color="color"></hello>
```


这里我们给指令的scope中的color属性和父scope中的color属性进行了双向绑定，并且给指令的link函数里，添加了一个单击事件，点击按钮会让按钮的颜色发生变化，并且改变指令scope的color属性的值，再给HTML页面中加了一个input标签，输出或者输入父scope的color属性的值。这里有一个地方需要注意：当前元素的属性名的值不用再加上{{}}这个表达式了，因为这里父scope传递的是一个真实的scope数据模型，而不是简单的字符串，

所以这样我们就可以传递简单的字符串、数组、甚至复杂的对象给指令的scope。现在让我们来看看点击这个按钮将会发生什么。

这就说明指令的scope的color属性被改变了。综上我们可以发现使用'='实现的是双向绑定。


####三：使用&调用父scope里的方法
```
var myapp=angular.module('myapp',[])
  .controller('myctrl',['$scope', function ($scope) {
   $scope.color='red';
   $scope.sayhello= function () {
    alert('hello');
   };
  }])
  .directive('hello', function () {
   return{
    restrict:'AECM',
    replace:true,
    template:'<button ng-click="sayhello()" style="background-color: {{color}}">click me</button>',
    scope:{
     color:'=',
     sayhello:'&'
    },
    link: function (scope,elements,attrs) {
     elements.bind('click', function () {
      elements.css('background-color','blue');
      scope.$apply(function () {
       scope.color='pink';
      })
     })
    }
   }
  })


  <hello color="color" sayhello="sayhello()"></hello>
```


这里我们也有两个地方需要注意：

```
1、我们不仅需要在模板中使用ng-click指令，绑定上要调用的父scope中的方法，而且要在给当前元素添加一个属性，并且这个属性指向要调用的父scope的方法。

2、指令scope的属性sayhello、当前元素的属性sayhello、模板绑定的事件方法名sayhello这三者要一致。那么这样我们就可以点击按钮，弹出一个对话框了。
```



8、transclude[boolean]属性
	
	这个属性用来让我们规定指令是否可以包含任意内容

```
.directive('hello', function () {
   	return{
	    restrict:'AECM',
	    replace:true,
	    transclude:true,
	    scope:{},
	    template:'<div ng-transclude></div>',
	}
})

<hello>
 hello
 <span>{{color}}</span>
</hello>
```

当他的值为true的时候，这是页面上输出的值 "hello  red"。当为false的时候，页面上将会是空白的。这里有一个地方需要注意，就是<span>{{color}}</span>，这里的color是父scope里的color。并不是指令里的scope的color属性。



9、compile[function]参数
	
	该方法有两个参数element，attrs，第一个参数element指指令所在的元素，第二个attrs指元素上赋予的参数的标准化列表。这里我们也有个地方需要注意：compile 函数不能访问 scope，并且必须返回一个 link 函数。但是如果没有设置 compile 函数，你可以正常地配置 link 函数，（有了compile，就不能用link，link函数由compile返回）。


```
.directive('hello', function () {
   return{
    restrict:'AECM',
    replace:true,
    translude:true,
    template:'<button ng-click="sayhello()" style="background-color: {{color}}">click me</button>',
    scope:{
     color:'=',
     sayhello:'&'
    },
    compile: function (element,attrs) {
     return function (scope,elements,attrs) {
      elements.bind('click', function () {
       elements.css('background-color','blue');
       scope.$apply(function () {
        scope.color='pink';
       })
      })
     };
    }
   }
  })
```


现在让我们来点击这个按钮

我们发现，这里点击按钮之后发生的事情和前面用link属性的一样，这其实是没有多少差别的。

其实在大多数的情况下，我们只需要使用 link 函数。这是因为大部分的指令只需要考虑注册事件监听、监视模型、以及更新DOM等，这些都可以在 link 函数中完成。 但是对于像 ng-repeat 之类的指令，需要克隆和重复 DOM 元素多次，在 link 函数执行之前由 compile 函数来完成。那么为什么我们需要两个分开的函数来完成生成过程，为什么不能只使用一个？要回答好这个问题，我们需要理解指令在Angular中是如何被编译的！



10、指令是如何被编译的
	
	当我们的angular应用引导启动的时候，angular 将会使用 $compile 服务遍历DOM元素，在所有的指令都被识别之后，将会调用指令的 compile 方法，返回一个link函数，然后将这个 link 函数添加到稍后执行的 link 函数列表中，这个过程被称为编译阶段。像 ng-repeat 这样的指令，需要被重复克隆很多次，compile 函数只在编译阶段被执行一次，并且复制这些模板，但是 link 函数会针对每个被复制的实例被执行。所以分开处理，让我们在性能上有一定的提高（这句话有点不太理解，我是从别的地方copy过来的。


11、controller[string or function]和require[string or string[]]参数
	
	当我们想要允许其他的指令和你的指令发生交互时，我们就需要使用 controller 函数。当另一个指令想要交互时，它需要声明它对你的指令 controller 实例的引用(require)。


```
.directive('hello', function () {
   return{
    scope:{},
    require:'^he',
    compile: function (element,attrs) {
     return function (scope,elements,attrs,cntIns) {
      cntIns.fn()
     };
    }
   }
  })
  .directive('he', function () {
   return {
    restrict:'AE',
    scope:{},
    controller: function ($scope, $compile, $http) {
     this.fn= function () {
      alert('hello');
     };
    }
   }
  })

  <he>
 <hello color="color" sayhello="sayhello()"></hello>
</he>
```

当页面加载完毕之后，会弹出一个对话框











	






















