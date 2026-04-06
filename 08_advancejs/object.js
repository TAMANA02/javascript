function multiplyBy5(num){
    return num+5
}
//function is also refrence an object 
multiplyBy5.power = 2


console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);//{}  by default context //function have thier own properties 





function createUser(username , price){
    this.username = username;
    this.price = price;
}

createUser.prototype.increment = function(){
    this.price++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

const chai = new createUser("chai", 30)
const tea = createUser("tea", 200)

chai.printMe()