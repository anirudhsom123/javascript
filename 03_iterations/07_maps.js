// maps method in arrays

const arr=[1,2,3,4,5,6,7,8]

const newArr=arr.map((num)=>{
    return num+10
})

//console.log(newArr)

// chaining methods

const res=arr
            .map((num) => num*10)
            .map((num) => num+10)
            .filter((num) => num >50)

console.log(res)