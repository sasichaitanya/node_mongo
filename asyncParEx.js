var async = require('async');

/*var stack=[];

var funOne=function(callback){
	callback(null,"Executed Function One");
}

var funTwo=function(callback){
	callback(null,"Executed Function Two");
}

var funThree=function(callback){
	callback(null,"Executed Function Three");
}

stack.push(funOne);
stack.push(funTwo);
stack.push(funThree);

async.parallel(stack,function(err,result){
	console.log(result);
}); 
*/

var stack={};

stack.getUserName=function(callback){
	var userName="chaithanyaa";
	callback(null,userName);
}

stack.getAge=function(callback){
	var Age=28;
	callback(null,Age);
}

stack.getGender=function(callback){
	var Gender="Male";
	callback(null,Gender);
}

async.parallel(stack,function(err,result){
	if(err){
		console.error("Error has been occured")
	}
	else{
		console.log(result);
	}
});