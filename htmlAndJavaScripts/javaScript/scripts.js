// //console.log('Hello! The is Olawale');
// let Olawale  = 4400;
// let ola = 100;
// let result = Olawale + ola ;
// document.write(result);

// // let university = ["unilag" , "OAU" , "UI" , "UniIlorin"];
// // document.write("<br>",university[3]);

// let person = {firstName: "olawale" , lastName: "ishola" , age: 20};
// document.write("<br>", person.firstName + " is " + person.age + "old");


// let number = Math.random(10);
// let secondNumber = number * 10 ;
// document.write("<br>",secondNumber);


// // let user = prompt("Enter your fullname for registration ");
// let user_money = Math.random();
// let amount = 10000000 * user_money ;
// document.write("<br>","Hello " + user + " your networth is " + amount );

// let arrays = ["olawale" , "semicolon" , 200 , true , "yes"];
// document.write("<br>", arrays.toString());

// let universities = ["unilag", "OAU", "UI", "Ilorin"];
// universities.splice(3,0, "IbadanPoly" ," Oyo poly") ;
// document.write("<br>" , universities);


// let sortingPractice = ["unilag", "OAU", "UI", "Ilorin"];
// sortingPractice.sort();
// document.write("<br>" , sortingPractice);

// let startYear = 2000 ;
// let endYear = 2050 ;
// for (let index = startYear ; index <= endYear ; index++){
//     if(index % 4 == 0){
//         console.log("This is a lip years" + index)
//     } 
//     else
//         console.log("This is not a lip year " + index);
// }

function boxSize(){
    let widthdeclare = document.getElementById("width").nodeValue ;
    let heigthdeclare = document.getElementById("heigth").nodeValue;
    let lengthdeclare = document.getElementById("length").nodeValue;
    let area = widthdeclare * heigthdeclare * lengthdeclare ;
    document.getElementById("solution").value = area ;
}
