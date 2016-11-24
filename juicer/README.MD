# javascript轻量级模板引擎juicer使用指南

大四还没有毕业的时候在一家小公司做前端开发，当时选用的模板解析引擎就是juicer，确实简单方便很好用。适合中小项目开发。

> Juicer 是一个高效、轻量的前端 (Javascript) 模板引擎，使用 Juicer 可以是你的代码实现数据和视图模型的分离(MVC)。

使用方法

编译模板并根据数据立即渲染出结果
```
juicer(tpl, data);
```

仅编译模板暂不渲染，返回一个可重用的编译后的函数
```
var compiled_tpl = juicer(tpl);
```

根据给定的数据对之前编译好的模板进行渲染
```
var complied_tpl = juicer(tpl);
var html = complied_tpl.render(data);
```

注册/注销自定义函数（对象）
```
juicer.register(‘function_name', function);
juicer.unregister(‘function_name');
```

默认参数配置
```
{
   cache: true [false];
   script: true [false];
   error handling: true [false];
   detection: true [false];
 }
```

修改默认配置，逐条修改
```
juicer.set('cache', false);
```

修改默认配置，批量修改
```
juicer.set({
    'script': false,
    'cache': false
 })
```

Juicer 默认会对编译后的模板进行缓存，从而避免同一模板多次数据渲染时候重复编译所耗的时间， 如无特殊需要，强烈不建议关闭默认参数中的 cache，这么做将会令 Juicer 缓存失效从而降低性能.




语法

* ${变量}  

- 使用${}输出变量，其中_ 为对数据源的引用（${_})。支持使用自定义函数。


```
${name}
${name|function}
${name|function, arg1, arg2}
 var = links: [{href: 'http://juicer.name', alt: 'Juicer'},
            {href: 'http://benben.cc', alt: 'Benben'},
            {href: 'http://ued.taobao.com', alt: 'Taobao UED'}  
           ]};
 var tpl = [ '{@each links as item}',
         '${item|links_build} <br />',  
         '{@/each}'].join('');
 var links = function(data) {    
 　　return '<a href="' + data.href + '" alt="' + data.alt + '" />';
};
juicer.register('links_build', links); //注册自定义函数
juicer(tpl, json);
```

* 转义/避免转义

 - ${变量} 在输出之前会对其内容进行转义，如果你不想输出结果被转义，可以使用 $${变量} 来避免这种情况。

 ```
 var json = {
    value: '<strong>juicer</strong>'
 };
 var escape_tpl='${value}';
 var unescape_tpl='$${value}';
 juicer(escape_tpl, json); //输出 '<strong>juicer</strong>'
 juicer(unescape_tpl, json); //输出 '<strong>juicer</strong>'
 ```

 * 循环遍历 {@each} ... {@/each}
 - 遍历数组，${index}当前索引
```
{@each list as item, index}
     ${item.prop}
     ${index} //当前索引
 {@/each}
```

* 判断 {@if} ... {@else if} ... {@else} ... {@/if}
* 注释 {# 注释内容}

{# 这里是注释内容}

* 辅助循环 {@each i in range(m, n)}
```
{@each i in range(5, 10)}
     ${i}; //输出 5;6;7;8;9;
 {@/each}
```

* 子模板嵌套 {@include tpl, data}

- 子模板嵌套除了可以引入在数据中指定的子模板外，也可以通过指定字符串`#id`使用写在`script`标签中的模板代码.

HTML代码：
```
<script type="text/juicer" id="subTpl">
   I'm sub content, ${name}
</script>
```


Javascript 代码：
```
var tpl = 'Hi, {@include "#subTpl", subData}, End.';

juicer(tpl, {
  subData: {
    name: 'juicer'
  }
});
// 输出 Hi, I'm sub content, juicer, End.
// 或者通过数据引入子模板，下述代码也将会有相同的渲染结果：

var tpl = 'Hi, {@include subTpl, subData}, End.';

 juicer(tpl, {
     subTpl: "I'm sub content, ${name}",
     subData: {
        name: 'juicer'
     }
 });
 ```


 一个完整的例子
 ```
 <script id="tpl" type="text/template">
  <ul>
    {@each list as it,index}
      <li>${it.name} (index: ${index})</li>
    {@/each}
    {@each blah as it}
      <li>
        num: ${it.num} <br />
        {@if it.num==3}
          {@each it.inner as it2}
            ${it2.time} <br />
          {@/each}
        {@/if}
      </li>
    {@/each}
  </ul>
</script>


var data = {
   list: [
     {name:' guokai', show: true},
     {name:' benben', show: false},
     {name:' dierbaby', show: true}
   ],
   blah: [
     {num: 1},
     {num: 2},
     {num: 3, inner:[
       {'time': '15:00'},
       {'time': '16:00'},
       {'time': '17:00'},
       {'time': '18:00'}
     ]},
     {num: 4}
   ]
 };

 var tpl = document.getElementById('tpl').innerHTML;
 var html = juicer(tpl, data);
 ```
