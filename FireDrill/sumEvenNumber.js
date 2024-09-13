function addEvenNumber(numbers){
	let arrayElement = 0 ;
	for(let element of numbers){
		if(element % 2 == 0){
			arrayElement = arrayElement + element ;
			arrayElement+1 ;
		}
	}
			return arrayElement ;
}
module.exports = {addEvenNumber};