//Variable Scope

/* let x=10
function f1(){
    let x=20;
    if(3===3){
        let x=30;
        //console.log(x) //local scope
    }
    // console.log(x) 
}
f1()
console.log(x) //global scope 

//Error : x is not defined, function has its own scope of variable

function f1(){
    let x=20;
}
f1()
console.log(x) 

//same error for var

function f1(){
    var x=20;
}
f1()
console.log(x) 

//block scope (Let), error : x is not defined
if (1===1){
    let x=10;
}
console.log(x) */

//Not a block scope (var)
if (1===1){
    var x=10;
}
console.log(x)