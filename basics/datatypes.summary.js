// Primitive
//Call By Value
//types--string , number, boolean , null , undefined , symbol , BigInt 

const score =54
const scorevalue=100.2

const isloggedin=true
const outsidetemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123') //symbol is for uniqueness 

console.log(id==anotherId)//-->false 

const BigInt=2645724528n


//Non Primitive (Refrence type)
//types--Arrays , Objects , Functions

const heros =["shaktiman","doremon","balveer","doga"]

let myobj= {
    name:"tamana",
    age:19,
}

//functions is treated as variable in js // datatype is return in object
const myfunction=function() {
    console.log ("helloworld");
}


// to find the datatype of any variable
console.log(typeof )