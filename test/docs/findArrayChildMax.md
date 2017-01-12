# 求数组子集和的最大值


* 时间复杂度 O(n)

* 空间复杂读 O(1)

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<p>求数组子集和的最大值</p>
</body>
<script type="text/javascript">
	function findMaxSum(arr){
		if(arr.length <= 0){
			return arr;
		}
		var max = 0;
		var cur = 0;

		for(var i = 0, len = arr.length; i < len; i++){
			cur += arr[i];
			cur = cur < 0 ? 0 : cur;
			max = cur > max ? cur : max;
		}
		return max;
	}
	var arr = [1,2,3,-10,-5,90,-25,23,1,-1,23];
	document.write(findMaxSum(arr)); // 111
</script>
</html>
```