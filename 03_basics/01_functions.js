
 function sayMyName() {
console.log("t")
console.log("a")
console.log("m")
console.log("a")
console.log("n")
console.log("a")
 }
//sayMyName()

// function addTwoNumbers(number1,number2){//parameters
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){
    //let result = number1+number2
   // console.log("tamana")
  //  return result
  return number1+number2
}

addTwoNumbers(3,5)//-->35
//addTwoNumbers(2,"a")//-->2a//arguments

//const result = addTwoNumbers(3,4)

//console.log(typeof("Result :", result));//-->undefined


function loginuserMessage(username="rohan"){
    if(!username){
console.log("please enter a username");
return
    }
    return `${username} just logged in`
}

//console.log(loginuserMessage("hello"));
//console.log(loginuserMessage("tamana"))//-->undefined 

//shopping cart where user add the items and no one knows the no. of inputs
//... used as rest operator mesans collecting number of items in a bundle 
function calculatecartPrice (val1,val2,...num1){
    return num1
}

//console.log(calculatecartPrice(499,7000,400,800))//-->400,800



 const user = {
    username: "tamana",
    price: 188
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user);
handleObject({
    username:"hello",
    price:376
})

const myNewarray = [200,400,100,600]

function returnSecondValue(getarray){
    return getarray[3]
}
//console.log(returnSecondValue(myNewarray));//600

console.log(returnSecondValue([200,400,100,600]));//600
