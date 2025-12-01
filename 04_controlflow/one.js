//if 

//if(condition==true){
//code execute 
//}


// const isUserLoggedin = true
// const temperature = 42
// if (temperature===50){
// console.log("temperature is less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }
// console.log("execute");

// operator -- > ,< ,<= ,>= ,== ,!= ,===


// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
//   console.log(`user power: ${power}`);


// const balance = 1999

// //if (balance >500 ) console.log("test");

// if (balance < 2000){
// console.log("less than 2000");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedin = true
const debitCard = true
const loggedinFromGoogle = false
const loggedinFromEmail = true

if(userLoggedin  &&  debitCard && 2==2 ){
    console.log("allow to buy course");
}

if(loggedinFromGoogle || loggedinFromEmail){
    console.log("user logged in");
}