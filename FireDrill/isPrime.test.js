const {primeNumber} = require("./isPrime.js");
test("checking if number is prime number" , ()=> {
	let number = 7 ;		
	let result = primeNumber(number);
	let expected = true ;
	expect(expected).toBe(result); 	
})
