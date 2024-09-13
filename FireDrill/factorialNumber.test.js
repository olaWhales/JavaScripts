const {factorial} = require("./factorialNumber.js");
test("Sum of multiples of Numbers" , ()=> {
	let number = 5 ;		
	let result = factorial(number);
	let expected = 120 ;
	expect(result).toBe(expected); 	
})
