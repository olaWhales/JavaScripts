/* 
// [1]

const book  = {
		title: 'The Great Gatsby',
		author: 'F.Scoth Fitzgerald',
		yearPublished: 1925
		}
const {title,author} = book ;
console.log(title,author);


// [2]

const car = {
		make : 'Toyota',
		model : 'Camry',
		year : '2021'
}
function carProperties(car) {
	for(const property in car){	
	console.log(property, car[property]);
	}
}
carProperties(car);


// [3]

const counter = {
		count : 0,
		step : 1, 
increament : function(){
		this.count += this.step ;
		return this.count ;
	}
}
console.log(counter.increament());
console.log(counter.increament());
console.log(counter.increament());


// [4]

const person1 = {
		firstName : 'Ajadi',
		lastName : 'Olawale',
persons : function(){
		return this.firstName + " " + this.lastName ;
		}
}
console.log(person1.persons());

*/

// [5]

const person2 = {
		firstName : 'Ajadi',
		lastName : 'Olawale',
		age : '25'}
function fullDetails(person2){
		return firstName + lastName + age ;
}
console.log(fullDetails);






