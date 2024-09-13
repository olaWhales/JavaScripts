function maximum(numbers){
	let number = 1 ;
	let variableStore = 0 ;
	for(let element of numbers){
		if(element != 0 & element > number){
			variableStore = element
		}
	}
		return variableStore ;
}
let num = [1,2,3,4,5,6,30,7,8,9,10,40] ;
console.log(maximum(num));

module.exports = {maximum};