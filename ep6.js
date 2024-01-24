//Rest Parameter

// summation=(x,y)=>{
//     return x+y
// }

// summation=(x,y,z)=>{
//     return x+y+z
// }

// // const result=summation(50,100)

// console.log(summation(50,100)) NaN, Wrong
// console.log(summation(50,100,200))

summation=(...numberArr)=>{
    let total=0
    for(let number of numberArr)total+=number
    return total
}

console.log(summation(500,1000,2000,3000))
console.log(summation(500,1000,2000,3000,500))
console.log(summation(500,1000,2000,3000,500,200))