## 利用margin-left: -1px
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		*{padding: 0; margin: 0;}
		body,html{height: 100%; width: 100%;}
		.parent{ width: 100px; height: 100px; background: #eee; clear:both;}
		.left{ width: 50%; height: 100%; border-right: 1px solid red; background: pink; float: left; margin-left: -1px;}
		.right{ width: 50%; height: 100%; background: blue; float: left;}
	</style>
</head>
<body>
	<div class="parent">
		<div class="left"></div>
		<div class="right"></div>
	</div>
</body>
</html>

```

## flex

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		*{padding: 0; margin: 0;}
		body,html{height: 100%; width: 100%;}
		.parent{ width: 100px; height: 100px; background: #eee; display: flex; justify-content: center; align-items: center;}
		.left{ width: 50%; height: 100%; border-right: 1px solid red; background: pink;}
		.right{ width: 50%; height: 100%; background: blue;}
	</style>
</head>
<body>
	<div class="parent">
		<div class="left"></div>
		<div class="right"></div>
	</div>
</body>
</html>
```
