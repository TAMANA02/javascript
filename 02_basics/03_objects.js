//singleton -->only one object when we make constructor but never with the literals 

// object literals 

const Mysym  = Symbol("key1")

const JsUser= {
    name : "tamana",
    "lastname" : "Shukla",
    [Mysym] : "mykey1",
    age : 20,
    location : "kanpur",
    email : "tamana@gamil.com",
    IsLoggedIn : false,
    lastLoggedIn : ["monday","wednesday"]
}

//console.log(JsUser.email)
//console.log(JsUser["name"])//-->tamana
//console.log(JsUser["lastname"])//-->shukla
//console.log(JsUser[Mysym])

JsUser.email = "perplexity@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "microsoft@gmail.com"
console.log(JsUser)

JsUser.greeting = function(){
   console.log("hello Js User")
}


JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.email}`)
}
JsUser.greeting()
JsUser.greetingTwo()