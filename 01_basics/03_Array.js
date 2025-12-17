const arr=new Array(10,20,30,40);
const newArr=new Array(50,60,70);


// will add the arr1 at the 4th index of the arr
arr.push(newArr);
console.log(arr.pop());

// concat returns a new array after concatinating 2 arrays
const concatArr=arr.concat(newArr);
console.log(concatArr)

// spread operator

const spreadArr=[...arr,...newArr]
console.log(spreadArr)

/*
flat array concat all elements to a single array upto 
depth flat parameter is passed to the method
*/

const nums=[1,2,3,[1,1],12,13,[1,2,3,[[1,1],2,3,4]]];
console.log(nums);
const flatArr=nums.flat(Infinity);
console.log(flatArr)

// check is the value is array or not
console.log(Array.isArray(flatArr))

// convert to array
const convertArr=Array.from("Anirudh");

// convert to empty array if get confused 
const emptyArr=Array.from(
    {
        name : "Anirudh"
    }
);
console.log(emptyArr)

// take input elements and return array
let a=100;
let b=[1,2,3];
let c="Anirudh"

console.log(Array.of(a,b,c));