//closure function
/* function outer(){
    let x=1;
    function inner(){
        return x++;
    }
    return inner;
}
const f = outer()
console.log(f())
console.log(f())*/

//another example
function outer(){
    let password ="1234";
    function inner(Pwd){
        if (Pwd === password) {
            return "Access granted";
        } else {
            return "Access denied";
        }
    }
    return inner;
    }
const chkpassword = outer()
console.log(chkpassword("1234"))
console.log(chkpassword("sdfgh"))