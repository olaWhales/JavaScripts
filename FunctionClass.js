// we can use this function 
	// Nested function

function outerFunction(numOne, numTwo){
	console.log("outerFunction");

	function innerFunction(secondNum){
		return numOne + secondNum ;
	}
	return innerFunction(numTwo);
}
console.log(outerFunction(2,3));

// or this which both do the same work
	//Arrow function

const result = (numOne , numTwo) => {
	return numOne * numTwo ;
}
console.log(result(2,3))


// function as a returnd Object

/*function calculation(){
	return {
		add: function(a , b){
			return a * b ;
		}
	};
};*/








//if do this

function calculate(){
	return {
		add:function(a,b){
			return a + b ;
		},
		subtract:(a,b)=> {
			return a -b ;
		}
	};
};
let totalResult = calculate();
console.log(totalResult.add(2,1))
console.log(totalResult.subtract(10,5))



