## 归并排序

原则：
> 将两个（或两个以上）有序表合并成一个新的有序表 即把待排序序列分为若干个子序列，每个子序列是有序的。然后再把有序子序列合并为整体有序序列

题目：
> 设计一个算法，合并两个数组


时间复杂度： O(nlogn)

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<p>归并排序</p>
</body>
<script type="text/javascript">

function mergeSort(arr, brr){
	var aLen = arr.length - 1;
	var bLen = brr.length - 1;
	var ret = [];

	while(aLen >= 0 && bLen >= 0){
		if(arr[aLen] > brr[bLen]){
			ret.push(arr[aLen]);
			aLen--;
		}else{
			ret.push(brr[bLen]);
			bLen--;
		}
	}

	while(aLen < 0 && bLen >= 0){
		ret.push(brr[bLen--]);
	}

	while(aLen >= 0 && bLen < 0){
		ret.push(arr[aLen--]);
	}
	return ret;
}

var arr = [1,4,6];
var brr = [2,3,5,7,8];
document.write(mergeSort(arr, brr));
</script>
</html>
```