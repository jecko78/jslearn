// spread operator
const newArr = [100,200,300]

// const data = [10,20,newArr]// Wrong

const data = [10,20,...newArr] //Right

// apply spread operator
const colors = ["ຂຽວ","ຟ້າ","ຂາວ"]

const allcolors = ["ແດງ","ເຫຼືອງ",...colors] //or allcolors.push(...newcolors)


console.log(data)
console.log(allcolors)