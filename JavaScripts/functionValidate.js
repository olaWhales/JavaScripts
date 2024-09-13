function validate(cardNumber){
let number = '' ;
for(let index = 0 ; index < cardNumber.length ; index++){
	if(cardNumber[index] != "-"){
	number = cardNumber ;
	}
}

if(number.length == 16){
if(number.startsWith(4) || number.startsWith(5) || number.startsWith(6)){
		return true 
	}else{
		return false 
	}
	
}
else return false;
}


console.log(validate("4444-4444-4444-4444"));