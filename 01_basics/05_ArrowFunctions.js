// **************ARROW FUNCTION **********************
const user={
    userName : "Anirudh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.userName} welcome to the course`)
    }
}

// user.welcomeMessage()

/*
 this is empty object in node environment
 this gives and object of window in browser console
*/


/*
function chai(){
let name="Anirudh"
console.log(this.name) //this.name will not work because this only works for objects
}

chai()

*/

//arrow function

const chai = () => {
    let name ="anirudh"
    console.log(this.name) // it also not work in arrow functions
}

const addtwo =(num) => {
    return num+2
}

console.log(addtwo(5))

// implicit return 

const addOne = (num) => num+1 
    // or
const addNums= (num1,num2) =>(num1+num2) // mostely to return objects
const obj =() => ({
    name : "Anirudh Som" ,
    age : 25
})


console.log(addOne(5))
console.log(` My name is ${obj().name} and i am ${obj().age} years old `)