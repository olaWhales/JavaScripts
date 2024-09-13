function factorial(number){
	let element = 1 ;
	for(let count of numbers){
		element *= count ;
	}
		return element ;
}
let elements = 5 ;
console.log(factorial(elements)) ;
module.exports = {factorial};