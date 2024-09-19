const {sortingOfNumber } = require("./ClassTask.js");
test("Sorting of numberS" , ()=> {
	let numbers = [2,3,4,5,6,7] ;
 	let result = sortingOfNumber(numbers);
	let expected = [5,9,13];
	expect(result).toBe(expected);
})