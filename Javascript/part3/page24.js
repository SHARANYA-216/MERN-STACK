//Destructing an obj
const employee = {
    name : "sharanya",
    city : "Hyderabad",
    state : "Telangana",
    country : "India",
}
// const {name, city} = employee
// console.log(name) //with Destructing

//without destructing (individually)

const name = employee.name 
const city = employee.city
console.log(name, city)

