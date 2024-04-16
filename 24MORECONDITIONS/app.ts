let car : string = 'subaru';
let age : number = '20';
let number : number[] = [3, 6, 9, 12, 15] 

//***string test***
//true
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')//true

//false test
console.log("Is car !== 'subaru'? I predict false.")
console.log(car !== 'subaru')//false






//lower case function test
// true test
console.log("Is car.to lowercase() == 'subaru'? I predict True.")
console.log(car.toLocaleLowerCase() == 'subaru')//true



//lower case function test
// false test
console.log("Is car.to lowercase() == 'toyota'? I predict false.")
console.log(car.toLowerCase() == 'toyota')//false




//numerical test

//equality and inequality


console.log("Is is age ==20? I predict True.")
console.log(age == 20 )//true


console.log("Is is age !==25? I predict True.")
console.log(age !== 25 )//true



//greater then and less then
console.log('is age > 18? i predict true')
console.log(age >18);//true

console.log("is age < 18? i predict false")
console.log(age <18);//false




//greater then or equal to  and less then or equal to
console.log('is age >= 18? i predict true')
console.log(age >=18);//true

console.log("is age <= 15? i predict false")
console.log(age <= 15);//false





//And or operator test
//true test with "and" operator
console.log("is 10 < age < 25?i predict true.")
console.log(age < 25 && age> 10);//true


//false test with "or" operator
console.log("is > 20 age < 15?i predict true.")
console.log(age >20 && age< 15);//false

//test wheter and item is in arry
//true test
console.log("is '3' in number ? i predict true. ")
console.log(3 in number);//true



//false test
console.log("is '7' in number ? i predict true. ")
console.log(7 in number);//false




