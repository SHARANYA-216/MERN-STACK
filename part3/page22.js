//nested objects

const employee = {
    name : "sathwik",
    address : {
        city : "Hyderabad",
        state : "Telangana", 
    }
}
console.log(employee.address.city)
employee.address.country = "India"
console.log(employee)
console.log(employee.address.country)