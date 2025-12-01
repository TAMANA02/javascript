// IMMEDIATELY INVOKED FUNCTION EXPRESSION
//function runs immediate //to remove global scope pollution 
(function chai(){
    //named iffe
    console.log(`DB CONNECTED`)
})();

( (name) => {
    //unnamed iffe
    console.log(`db connected ${name}`)
} )("tamana")

