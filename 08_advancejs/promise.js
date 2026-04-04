fetch('https://google.com').then().catch().finally()

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 2000);
});

promise.then(result => console.log(result))
       .catch(error => console.log(error));




const promiseone = new Promise(function(resolve , reject) {
      //do an async task
      //DB calls , cryptography , network
      setTimeout(function(){
        console.log('async task is complete');
        resolve()
      }, 1000)
})

promiseone.then(function(){
    console.log("promise consumed")
})






new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("async task two");
        resolve()
    },1000)

}).then(function(){
    console.log("async two resolved");
})







const promisethree = new Promise(function(resolve , reject){
     setTimeout(function(){
       resolve({username: "chai" , email:"chai@example.com" })
     },1000)
})

promisethree.then(function(user){
     console.log(user);
})







const promisefour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "tamana" , password:"1234"})
        }else{
            reject('ERROR:something went wrong')
        }
    }, 1000);
})

 promisefour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("THE PROMISE IS EITHER RESOLVED OR REJECTED"))







const promisefive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "javascript" , password:"1234"})
        }else{
            reject('ERROR:js went wrong')
        }
    }, 1000);
})

async function consumepromisefive(){
   try{
     const response = await promisefive
    console.log(response);
   }
   catch(error)
   {
      console.log(error);
   }
}

consumepromisefive()







async function getAllusers(){
   try{
    const response = await fetch('https://api.github.com/users/tamana02')
   
   const data = await response.json()
   console.log(data);
   }
   catch(error){
    console.log("E , error")
   }
}
getAllusers()







async function getAllusers(){
   try{
    const response = await fetch('https://api.github.com/users/tamana02')
   
   const data = await response.json()
   console.log(data);
   }
   catch(error){
    console.log("E , error")
   }
}




fetch('https://api.github.com/users/tamana02')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error)) 