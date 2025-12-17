// ************ Immediately Invoked Function Expression(IIFE)*****


// named IIFE cause the function has name here in this case name is chai()
(function chai(){
    console.log("DB Connected")
}) ();  // IFFE wrapping function in brakcets for immediate execution
/*
 1st bracket for writing function
 2nd bracket for executing function 
*/

// IIFE using arrow function
((name)=>{
    console.log(`${name} is a b.Tech grad. `)
}) ("anirudh");