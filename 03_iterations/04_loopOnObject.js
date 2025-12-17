const myObj={
    'game1' : "NFS",
    'game2' : "COD" ,
    'game3' : "COC"
}

// for in loop

for (const key in myObj) {   
    console.log(`${key} :- ${myObj[key]}`)     
}

// trying for in on array

const arr=['a','b','c','d']

for (const key in arr) {

    console.log(arr[key])
    
}