class user {
    constructor (username) {
       this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    createId(){
        return `123`
    }
}

const tamana = new User("tamana")
console.log(tamana.creatreId())