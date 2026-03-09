//some

/* const numbers = [25,27,29,20]
const result = numbers.some((number) => number > 20 )
console.log(result) 

//every

const numbers = [25,27,29,20]
const result = numbers.every((number) => number > 20 )
console.log(result) */

const subjectscore = [25,27,29,20]
const result = subjectscore.every((number) => number > 20 )
if(result) console.log("Pass")
else console.log("Fail")