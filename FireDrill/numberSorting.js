function element(numbers){
    let number = "";
    let theNumber = 0 ;
    for (elementNumber of numbers){
        theNumber = elementNumber.reduce((accumulator, currentValue) => accumulator + currentValue, theNumber)
        return theNumber ;
        number += elementNumber;
        console.log(number)
        theNumber.pop(number);
            // console.log(number);
            return number ;
        // } 
    } 
}
let elementGiving = [9,9,9];
console.log(element(elementGiving));
