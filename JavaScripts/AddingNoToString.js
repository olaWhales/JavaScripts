function number(numbers){
    let changeNumberToString = ""; 
    let finalResult = [];
    for(let count = 0 ; count < numbers.length ; count++){
        changeNumberToString += numbers[count];
    }
    let turntoInt = parseInt(changeNumberToString) ;
    let storage = turntoInt + 1 ;
    let element = String(storage);
    for(let index = 0 ; index < element.length ;index++){
            finalResult.push(element[index]);
    }
    return finalResult ;
}
let numberGiven = ["9","9","9","9"];
console.log(number(numberGiven));

