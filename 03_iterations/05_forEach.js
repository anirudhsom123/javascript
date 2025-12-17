// for each loop

const coding=['java','python','js','cpp']

// using function
coding.forEach(function (code) {
   // console.log(code)
});

// using arrow function

coding.forEach(
    (item) =>{
       // console.log(item)
    }
)

coding.forEach(
    (item,idx,arr) => {
       // console.log(item , idx , arr)
    }
)

const myCoding=[
    {
        languageName : "javascript",
        fileType : ".js"
    } ,
     {
        languageName : "python",
        fileType : ".py"
    } ,
     {
        languageName : "java",
        fileType : ".java"
    } 
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})