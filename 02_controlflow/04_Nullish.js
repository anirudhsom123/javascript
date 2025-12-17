// Nullish Coalescing Operator (??) : used for null or undefined values

let age;
age=5 ?? 10. //  just like a fall back mechanism

console.log(age)

let newAge;
newAge=null ?? 15
console.log(newAge)

/*
Terniary Operator 
syntax
condition ? true : false
*/

const voterAge=16

voterAge>=18 ? console.log("can vote ") : console.log("cant vote")
