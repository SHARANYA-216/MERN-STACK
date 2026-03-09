//callback function
/* function greet(name,callback){
    callback();
}
greet("sharanya",()=>{
    console.log("Hello")
})
*/

function greet(name,callback){
    callback();
    console.log(`Welcome ${name}`)
}
greet("sharanya",()=>{
    console.log("Hello")
})