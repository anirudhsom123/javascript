const arr=[1,2,3,4,5,6]

const arr2=arr.filter((num) => {
    return num>3
})

//console.log(arr2)

// using for each 

const newArr=new Array();

arr.forEach((value)=>{
    if(value>4){
        newArr.push(value)
    }
})

console.log(newArr)