/* 
   1. comparison operators in  js <,>,>=,<=,==,!=,===
   2. === is called strict equal cause it checks
      for the data type also
  */


// let a=15;
// let b="15";

// if(a==b){
//     console.log("executed") // will execute
// }   

// if(a===b){
//     console.log("not executed") // will not execute
// }

// let temp=21;

// if(temp<20){
//     console.log("temp is less then 20")
// } else{
//     console.log("Temp is greater then 20")
// }


/*
&& operator is used to check for the all condtion to be true
then only will enter the if conidition
*/



// CHECKING WHETHER OBJECT IS EMPTY OR NOT

let obj={}

if(Object.keys(obj).length===0){
    console.log("Obj is empty")
}