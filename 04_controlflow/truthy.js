const userEmail = []

if(userEmail){
    console.log("got user email");
}else {
    console.log("don't got the user email");
}

//falsy values 
//false ,0 ,-0 , BigInt 0n , "" , null , undefined , NaN

//truthy values
//true , "0" ,  "false" , " " , [] , {} , function(){}--> (empty function)

// if(userEmail.length === 0 ){
//      console.log("array is empty ");
// }

const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
}

// false == 0
// --> true

// false == ""
// --> true

// 0 == ""
// -->true


//Nullish Coalescing Operator (??) : null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 14

console.log(val1);

//terniary operator 
//condition ? true : false

const iceTeaprice = 100
iceTeaprice >= 80 ? console.log("less than 80") : console.log("more than 80")