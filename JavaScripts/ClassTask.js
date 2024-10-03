function sortingOfNumber(arrayOfNumber){
    let numberStorage = 0 ;
    let counter = 0 ;
    let output = [] ;
    for (let index in arrayOfNumber){
        numberStorage += index ;

        if (numberStorage[index] == 1){
            counter+= index ;
            output.push(counter) ;
        }
        if(index == 2){
            counter += index ;
            output.push(counter)
        }
        if(index == 3){
            counter += index ;
            output.push(counter)
        }
    }
    return output ;
}


let number = [2,3,4,5,6,7] ;
console.table(sortingOfNumber(number));



// let arrayNumber = [1,2,3,4,5,67];
// let answer = arrayNumber.splice(1,0,2);
// console.log(answer);


// let arrayNumbers = [1,2,3,4,5,67];
// let arr = [7,4,5,9];
// let answers = arrayNumbers.splice(1,0,6,9, ...arr);
// console.log(arrayNumbers)
// console.log(answers);


// function callbackFunction(){

// }

//to multiply the number
// let arr = [3,4,5,6,7,8];
// arr.forEach((element)=>{
//     let answer = element * 2;
//     console.log(answer)
// });

// let arr = [3,4,5,6,7,8];

// arr.forEach((element, index)=>{
//     let answer = element * 2;
//     console.log(answer);
//     console.log(index);
// });

// let arr = [3,4,5,6,7,8];

// let callBack = (element, index)=>{
//     let answer = element * 2;
//     console.log(answer);
//     console.log(index);
// }
// arr.forEach(callBack)

