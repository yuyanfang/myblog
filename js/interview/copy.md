#也谈JavaScript对象之深度克隆

也不知道从什么时候开始，前端圈冒出了个新词：对象深度克隆。看起来好像很高大上的样子，实际上并不新鲜，在我们的实际项目开发中，你可能早已用到，只不过由于汉字的博大精深，有些原本很简单的事物被一些看似专业的词汇稍加修饰，就变得神秘起来了。

首先为什么要将一个对象进行深克隆？请允许我进行一个猜测：你有时一定会认为js的内置对象document太长，那么你可能会这样做：

```
var d = document;
d.by = function(id){
    return d.getElementById(id);
};
d.by('id').innerHTML = 'hello sentsin';
```

> 上述代码对document.getElementById进行了简化，同时在原document对象中也增加了一个by的成员方法，你可以通过document.hasOwnProperty('by')返回的状态值来验证你的判断。再看下面一个例子。

```
var person = {name: '贤心', profession: '前端开发', place: '杭州'};
var newPerson = person;
newPerson.age = '24';
console.log(person);
//结果：{name: '贤心', profession: '前端开发', place: '杭州', age: 24}
```


由此可见，将一个对象通过简单的传递给一个新的变量时，仅仅只是给该对象增添了一个别名。这意味着，通过对该别名的操作，原有对象键值会发生改变。但问题在于，有时我们希望newPerson完全独立于person，彼此之间不存在同步关系，那么就需要生成一个副本，请看例子：

```
var cloneObj = function(obj){
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(obj), //系列化对象
        newobj = JSON.parse(str); //还原
    } else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ? 
            cloneObj(obj[i]) : obj[i]; 
        }
    }
    return newobj;
};


//测试
var obj = {a: 0, b: 1, c: 2};
var arr = [0, 1, 2];
//执行深度克隆
var newobj = cloneObj(obj);
var newarr = cloneObj(arr);
//对克隆后的新对象进行成员删除
delete newobj.a;
newarr.splice(0,1);
console.log(obj, arr, newobj, newarr);
//结果： {a: 0, b: 1, c: 2}, [0, 1, 2], {b: 1, c: 2}, [1, 2];
```

这便是所谓的对象克隆。不过有几处需要解释一下。代码中的JSON对象及其成员方法stringify和parse属于ECMAScript5规范，它们分别负责将一个对象（包括数组对象）转换成字符串，和还原，从而实现对象的深拷贝。那么对于低级浏览器（如IE），拷贝数组的话，可以用newobj.concat(obj)，而普通对象，就索性枚举赋值好了。
