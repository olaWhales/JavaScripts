const {addEvenNumber } = require("./sumEvenNumber.js");
test("sum of EvenNumber" , ()=> {
	let numbers = [1,2,3,4,5,6,7,8,9,10] ;		
	let result = addEvenNumber(numbers);
	let expected = 30 ;
	expect(expected).toBe(result); 	
})
