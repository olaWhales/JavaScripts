const {add, subtract, evenNumber } = require("./index.js");  //require is a KEYWORD which means import // dot means ONE step back //Slash means ONE step forward

test("ADD two number" , ()=> {
	let numberOne = 2 ;
	let numberTwo = 29 ;		
	let result = add(numberOne , numberTwo);	// ACT
	let expected = 31 ;
	expect(expected).toBe(result); 			// ASSERT

}) //the bracket takes 2 things which is description and call back function
// ARRANGE
// ACT
// ASSERT


//NUMBER 2


//const subtract = require("./ index.js");

test("SUBRACT two numberS" , ()=> {
	let numberOne = 30 ;
	let numberTwo = 10 ;
 	let result = subtract(numberOne , numberTwo);
	let expected = 20;
	expect(result).toBe(expected);
})

test("evenNumbers" , ()=> {
	let newArray = [2,3,4,5] ;
	let result = evenNumber(newArray);
	let expected = evenNumber[newArray] ;
	expect(result).toEqual([2,4]);
})





