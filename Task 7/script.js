const myAge = 20; //my age

let earlyYears = 2; //first two years of a dog’s life count as 10.5 dog years each.
earlyYears *= 10.5;

let laterYears = myAge - 2; //since first 2 yesrs is calculated
laterYears = laterYears * 4; //each later years equates to 4 dog years

const myAgeInDogYears = earlyYears + laterYears; //finding my age in dog years

//storing my name and printing my age in dog years
let myName = "Mahendra";
myName = myName.toLowerCase(); //calling of buit-in function and storing it in myName function
console.log(`\nMy name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.\n`);