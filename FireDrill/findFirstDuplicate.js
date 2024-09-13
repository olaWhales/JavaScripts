function duplicate(numbers){
	let element = 0 ;
	let counter = 0 ;
	for(let index = 0 ; index < numbers.length ; index++){
		for(let count = 0 ; count < element.length-1 ; count++){

			if(index > 1){
			
			}

			if(numbers[index] == element[count]){
					element = numbers[index] ;
				}
			}
		}
		return element ;
}
let elements = [1,1,3,6,6,7,8,8] ;
console.log(duplicate(elements)) ;

module.exports = {duplicate};