## 数组中出现次数超过一半的数字


根据数组的特点找出 o(n)

```
/**
 * 说明：
 * flag： 如果和前一项相等 flag++，不相等 flag--
 * number: 当前出现次数最多的数
 */
function findMany(arr){
    var flag = 0;
    var number = arr[0];
    for(var i = 1, len = arr.length; i < len; i++){
        if(arr[i-1] === arr[i]){
            number = arr[i-1];
            flag++;
        }else{
            flag--;
            if(flag < 0){
                flag = 0;
                number = arr[i];
            }
        }
    }
    return number;
}

var arr = [1,2,1,2,1,2,1,2];
findMany(arr) // 2
```