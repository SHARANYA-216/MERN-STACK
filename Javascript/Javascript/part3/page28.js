const numbers = [25,21,27,20]

/* for(let i=0;i<numbers.length;i++){

    console.log(numbers[i])
}
// This can be achieved using forEach, syntax: forEach(()=>{}) 

numbers.forEach((number)=>{

    console.log(number)
})

//map - works for looping an array as well as for modifiying it.
//looping an array
numbers.map((number) =>{
    console.log(number)
})

//modifying
const newArray = numbers.map((number) => number+3)
console.log(newArray) */

//filter - to filter the values

const newArray = numbers.filter((number) => number>25)
console.log(newArray)

//find - only returns the first value even it exists 2 or more values
const newa = numbers.find((number) => number>21)
console.log(newa)

