// ES6


// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}1111`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai" , "chai@gmail.com", "1234")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


//BEHIND THE SCENE

function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
}

User.prototype.encryptPassword = function(){
       return `${this.password}1111`
}
User.prototype.changeUsername = function(){
       return `${this.username.toUpperCase()}`
}

const tea = new User("chai" , "chai@gmail.com", "1234")


console.log(tea.encryptPassword());
console.log(tea.changeUsername());