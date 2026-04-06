const user = {
    username: "tamana",
    loginCount: 9,
    signedIn: true,//object literals

    getuserDetails: function(){
        // console.log("got user deatils from database")
        // console.log(`username : ${this.username}`)
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getuserDetails());
// console.log(this);//cuurrent context in global context 

function User(username, logincount, isloggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isloggedIn = isloggedIn

    
    //return this;
}

const userone = new User("tamana",20,2)//constructor functions
const usertwo = new User("chaiorcode",11,1)//overwrite code 
console.log(userone.constructor);
//console.log(usertwo);