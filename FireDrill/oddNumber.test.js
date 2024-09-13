const {countOddNumber} = require("./oddNumber.js");
test("checking for duplicate Number" , ()=> {
	let number = [1,4,9,7,4,5,3,4,5,6,8] ;		
	let result = countOddNumber(number);
	let expected = 5 ;
	expect(expected).toBe(result); 	
})
