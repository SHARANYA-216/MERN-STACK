// function() though objects using 'this' keyword

const employee = {
    name : "sathwik",
    basic : 35000,
    bonus : 10000,
    salary : function() {
        console.log(this.basic + this.bonus)
    }
}
employee.salary()
console.log(employee)