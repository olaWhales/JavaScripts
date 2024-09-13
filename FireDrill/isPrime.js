function primeNumber(numbers){
	if (numbers % 2 == 1 & numbers % 3 == 1 ){
			return true ;
		}
		else{
			return false ;
		}
	

}
let numberInput = 7 ;
console.log(primeNumber(numberInput));

module.exports = {primeNumber};