// creating Objects

/* const obj = {
    name : "sharanya",
    "branch" : "csm",
}
console.log(obj)*/

//Another way

const obj = new Object()
obj.name = "sharanya"
obj.branch = "csm"
console.log(obj)

//to add score
obj.score = 98
console.log(obj)

//adding in square braces
obj['rank'] = 1
console.log(obj)

//Reason to use square braces is
let key = "city"
let value = "hyderabad"
obj.key = value //returns key = "city"
console.log(obj)

//so for keyvalue pairs we need to use square braces
obj[key] = value
console.log(obj) //prints correctly like city = 'hyderabd'

//To delete a particular key
delete obj.branch
console.log(obj)