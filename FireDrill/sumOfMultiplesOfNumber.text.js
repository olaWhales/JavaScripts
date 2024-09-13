const {sumOfMultiples} = require("./sumOfMultiplesOfNumber.js");
test("Sum of multiples of Numbers" , ()=> {
	let number = 20 ;		
	let result = sumOfMultiples(number);
	let expected = 113 ;
	expect(expected).toBe(result); 	
})
