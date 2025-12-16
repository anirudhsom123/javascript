const myArr=new Array(1,2,3);

// Add element to last index in arr
myArr.push(4);
console.log(myArr);

// remove last element from array
myArr.pop();
console.log(myArr);

// add element at starting of array
myArr.unshift(10);
console.log(myArr);

// remove element from begining of array
myArr.shift();
console.log(myArr);

// check for element is array boolean output(true/false)
myArr.includes(5);
console.log(myArr);

/* return index of the number provided in method
 return -1 if element dont exist in array
*/
myArr.indexOf(5);
console.log(myArr);

/*
 join elements of array and return them as a comma separated string 
*/
const newArr=myArr.join();
console.log(newArr)
console.log(typeof newArr);

// slice and splice

/* 
SLICE : return array from start_index_value to last_index_value
last index is not included
*/

const tempArr=newArr.slice(1,3)
console.log(myArr)

/* 
SPLICE : return array from range include the last index and
also remove those elements from the new array
*/

const spliceArr=myArr.splice(1,1);
console.log(myArr)
