const {duplicate} = require("./findFirstDuplicate.js");
test("checking if number is prime number" , ()=> {
	let number = [1,1,3,6,6,7,8,8] ;		
	let result = duplicate(number);
	let expected = [1,1,1] ;
	expect(result).toBe(expected); 	
})