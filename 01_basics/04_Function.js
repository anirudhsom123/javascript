/* 
 Method 1 of defining function
 can't call this function before declaration
 */

const addTwo=function(num){
    return num+2
}

// console.log(addTwo(5));

/*
Method 2 of defining functions
(can call this function before its declaration)
*/
 
function addOne(num){
    return num+ 1
}

console.log(addOne(12))