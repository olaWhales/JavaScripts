function countOddNumber(numbers){
	let number = 0 ;
	for(let element of numbers){
		if ( element % 2 == 1){
			number = element ;
		}
	}
		return number ;
}
let numberInput = [1,4,9,7,4,5,3,4,5,6,8] ;
console.log(countOddNumber(numberInput))
module.exports = {countOddNumber};