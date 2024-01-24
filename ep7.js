// Destructuring
// Can apply not Array variable but object also.
const colors = ["ຂາວ","ແດງ"]

// Old method
// const a = colors[0]
// const b = colors[1]

// new method
const[a,b]=colors

// const[,b]=colors get only b variable
console.log(a)
console.log(b)

console.log(a,b)