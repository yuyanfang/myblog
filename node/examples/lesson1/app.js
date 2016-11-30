var express = require('express');
var app = express();

app.listen(3000, function(){
	console.log('listen 3000 prot begin');
});


// 请求方法
app.get('/', function(req, res){
	res.send('MOTHED GET');
});

app.post('/', function(req, res){
	res.send('MOTHED POST');
});