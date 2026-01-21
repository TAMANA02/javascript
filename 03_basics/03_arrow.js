const user = {
    username : "tamana",
    price : 999, //this refers the current context

    welcomemessage : function(){
        //console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }


}
// user.welcomemessage()
// user.username = "hello"
// user.welcomemessage()

//console.log(this);


// function Chai(){
//     let username = "tamana"
//     console.log(this.username);
// }

// Chai()


// const chai = function(){
//     let username = "tamana"
//     console.log(this.username);
// }

const chai = () => {
    let username = "tamana"
    console.log(this);
}

//chai()

//() => {}  this is an arrow function

//const addTwo = (num1,num2) => num1 + num2 //implicit return

//const addTwo = (num1,num2) => (num1 + num2)


const addTwo = (num1,num2) => ({username : "tamana"})

console.log(addTwo(2,8));//-->10

const myArray = [2,4,6,8]

myArray.forEach(() => {})