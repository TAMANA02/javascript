// for of  // array specific loops

// ["", "" , "" ]
// [{},{},{}]


const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "hello world"
for (const greet of greetings) {
    //console.log(`eaach character is : ${greet}`);
}

//maps --> for unique values no duplicacy

const myMap = new Map()
myMap.set("name" , "john")
myMap.set("age" , 30)
myMap.set("country" , "USA")

for (const [key , value] of myMap) {
    //console.log(`${key} : ${value}`);
}

const myObj = {
    name : "john",
    age : 30,
    country : "USA"
}

// for (const [key , value] in myObj) {
//     console.log(key : value);
// }
