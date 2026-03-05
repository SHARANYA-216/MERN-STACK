//Asynchrnous setTimeout
//every strat at the same time

/* console.log("Beginning")
setTimeout(()=>{
    console.log("Hello World!")
 },3000);
console.log("Ending") */

/* Output: Beginning
Ending
Hello World! */

//To solve this problem we use:
function f1(){
    console.log("Beginning")
}

function f2(){
    return new Promise((resolve,reject) => {

    setTimeout(()=>{
        console.log("Hello World!")
        resolve()
    },3000);

 });
}
function f3(){
    console.log("Ending")
}
async function main(){
    f1()
    await f2()
    f3()
}
main()
//works fine!