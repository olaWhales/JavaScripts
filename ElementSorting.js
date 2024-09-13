function exercise(number){
	let oddNumbers = 0 ;
	let evenNumbers = 0 ;
	let numbers = [] ;

	for(let index = 0 ; index <= number.length ; index++){
		if(number[index] % 2 == 0){
		oddNumbers ++;
		}
		else if(number[index] % 2 == 1) {
		evenNumbers ++;
		}
	}
		numbers.push(evenNumbers, oddNumbers) ;
		return numbers ;
}
console.log(exercise([6,79,2,1,5]));












/*function exercises(number){
	let oddNumbers = 0 ;
	let evenNumbers = 0 ;
	let numbers = [] ;

	for(let index = 0 ; index <= number.length ; index++){
		if(index % 2  == 0){
		oddNumbers += 1
		}

		else if(index % 2 == 1) {
		evenNumbers += 1 ;
		}
	}
numbers.push(oddNumbers,evenNumbers);
return numbers ;
};
console.log(exercises([1,2,5,8,4,11]));

**/

