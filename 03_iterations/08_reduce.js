// reduce using function
const arr=[1,2,3,4,5]

const res=arr.reduce(function (acc,currval) {
    return acc+currval
},0)

//console.log(res)

// using arrow function

const ans=arr.reduce((acc,currval)=> {
    return acc+currval
},0)

console.log(ans)