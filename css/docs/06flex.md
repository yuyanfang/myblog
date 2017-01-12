# flex 


定义：

## 1.容器的属性

### flex-flow

#### flex-direction

> 决定主轴的方向   

```
row\row-reverse\column\column-reverse
```

#### flex-wrap

> 如果一行显示不下，怎样折行

```
nowrap\wrap\wrap-reverse
```

### justify-content
 
 > 项目在主轴上的对齐方式
 
 ```
 flex-start\flex-end\center\space-between\space-aground
 ```
 
### align-items
 
 > 定义项目在交叉轴上如何对齐
 
 ```
 flex-start\flex-end\center\stretch\baseline
 ```

### align-content

> 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用


```
flex-start\flex-end\center\space-between\space-aground\stretch
```


## 2.项目属性

### order

> 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0

### flex
> flex 属性是 flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选

#### flex-grow

> 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大


#### flex-shrink

> 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小

#### flex-basis

> 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

### align-self

```
auto | flex-start | flex-end | center | baseline | stretch
```
