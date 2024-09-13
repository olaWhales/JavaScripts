const {maximum} = require("./findMaximum.js");
test("sum of EvenNumber" , ()=> {
	let numbers = [1,2,3,4,5,6,30,7,8,9,10,40] ;		
	let result = maximum(numbers);
	let expected = 40 ;
	expect(expected).toBe(result); 	
})
