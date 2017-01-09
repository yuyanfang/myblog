
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<div class="parent">
		<div class="child"></div>
	</div>
</body>
<style type="text/css">
*{padding: 0; margin: 0; list-style: none;}
html,body{
	height: 100%;
}
.parent {
	background: red;
	height: 100%;
	width: 100%;
	position: relative;
}
.child{
	background: blue;
	width: 200px;
	height: 200px;
	top: 50%;
	left: 50%;
	margin-top: -100px;
	margin-left: -100px;
	position: absolute;
}
</style>
</html>
```