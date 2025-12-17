// // printing counting 1 to 10
// for(let i=1 ; i<=10 ; i++){
//     console.log(i);
// }

// // traversing array
// let arr=[10,20,30,40,50]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// break and continue

for(let i=1;i<=10;i++){
    if(i===5) break;
    console.log(i)
}
for(let i=1;i<=10;i++){
    if(i===5 || i===10) continue;
    
    console.log(i)
}