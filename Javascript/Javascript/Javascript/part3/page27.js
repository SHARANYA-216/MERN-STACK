//Arrays

/* let employees = ['john','cathy','mike','amy']
employees = [...employees, "Brain"] //adding employee using spread operator
console.log(employees)

//Another way to add the employees
employees.push("sathwik")
console.log(employees) */

//Another appraoch for creating employees in an array

let employees = new Array('john','cathy','mike','amy')
console.log(employees[3])
console.log(employees.length)
for(let i=0;i<4;i++){
    console.log(employees[i])
}

//other kind of loop 

for(let e of employees){
    console.log(e)
}