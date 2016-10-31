(function(){

	// 1.
	// if(true){
	// 	let name = 'wfj';
	// }
	// console.log(name)

	//2. 
	// for(var i = 0; i < 10; i++){

	// }
	// console.log(i);


	//3.声明变量
	//
	// function add(a, b){
	// 	var sum = a + b;
	// 	return sum;
	// }

	// var result = add(10, 20);
	// console.log(sum); // error

	//
	function add(a, b){
		sum = a + b;
		return sum;
	}

	var result = add(10, 20);
	console.log(sum); // 30
})()