const { count } = require("yargs");
function filterPractice(number) {
    return number >= 70;
}
let numbers = [50, 90, 73, 56, 40, 69, 20, 80, 85, 70];
let score = numbers.filter(filterPractice);
console.log(score); 
module.exports = {filterPractice};


function bookshop(distribution){
    let bookClub = ["emily" , "jack" , "Sophia" , "Daniel"];
    let bookStore = {};
    let count  = 0
   for(const name of bookClub){
            bookStore[name] = distribution[count];
           count++ ;
        }
    return bookStore;
    }
let books = ["Pride and Prejudice Jane Austen","1984 George Orwell","The Great Gatsby F.Scott Fitzgerald", "Jane Eyre Charlotte Brontë"
];
console.log(bookshop(books));


let number = [85, 92, 78, 88, 95];
function grades(additionalScore){
    let totalScore = number.map(score => score + 5)
        return totalScore ;
}
console.log(grades(number));


let elements = [2,4,6,8,10];
function square(squaroot){
    let result = elements.map(element => element * element);
    return result ;
}
console.log(square(elements));


