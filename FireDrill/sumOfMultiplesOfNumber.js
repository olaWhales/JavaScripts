function sumOfMultiples(numbers){
	let element = 1 ;
	for(count = 0 ; count <= numbers ; count++){
		if(numbers % 3 == 0 && numbers % 5 == 0){
		element += numbers ;
		}
	}
		return element ;
}
let elements = 20 ;
console.log(sumOfMultiples(elements));
module.exports = {sumOfMultiples};

