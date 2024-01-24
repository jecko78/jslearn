//Object

// Old method
// const customer = {
//     customername : "Santisouk",
//     age : 45,
//     address : "Oudomvilay"    
// }

// New method

const customername = "Santisouk"
const age = 45
const address = "Oudomvilay" 

const customer = {
    customername,
    age,
    address,
    showdata(){
        console.log("ຊື່ຂອງລູກຄ້າ = "+customername)
    }
}

console.log(customer);
customer.showdata();