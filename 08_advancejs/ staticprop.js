class user {
    constructor (username) {
       this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

   static createId(){
        return `123`
    }
}

const tamana = new User("tamana")
console.log(tamana.creatreId())

class Teacher extends User {
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher ("iphone","i@phone.com" )
console.log(iphone.createId())