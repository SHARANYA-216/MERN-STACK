// async example

function placeorder(){
    console.log("Order has beeen placed")
}
function makepayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            /* console.log("Payment has been processed")
            resolve()
            reject("something went wrong!") */
            resolve("Payment has been processed") //without console and storing res in const inside main function
        },3000) 
       /* console.log("Payment has been processed")
            resolve()
            // reject("something went wrong!") */
        
    });
}
function sendconfirmation(){
    console.log("Confirmation has been sent")
}
async function main(){
    try{
        placeorder()
        // await makepayment();
        const result = await makepayment();
        console.log(result)
        sendconfirmation()
    }
    catch(err){
        console.log(err)
    }
}
main();