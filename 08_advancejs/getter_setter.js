class User {
    constructor(email , password){
        this.email = email;
        this.password = password
    }

    get password(){
        return `${this._password}tamana`
    }

    set password(value){
        this._password = value
}
}

const tamana = new User("h@tamana.ai", "hellooji")
console.log(tamana.password);