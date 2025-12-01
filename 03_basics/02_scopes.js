let a=400// this is act as an global scope

if(true){
    let a = 10// this is act as an block scope
    const b = 20
    //var c = 40//rarely use var as they can create problem in complex code 
    //console.log("inner:",a)
}


//console.log(a);
//console.log(b);
//console.log(c);


//nested scopes

function one(){
    const username = "tamana"

    function two(){
        const website = "youtube"
        console.log(username);

    }
    //console.log(website);

   two()
}

//one()

if(true){
    const username = "tamana"
    if(username === "tamana"){
        const website = "youtube"
        //console.log(username + website);
    }
    //console.log(website);//scope is limited
}

//console.log(username);//scope is limited


// ************************ interesting *************************


console.log(addone(8))
function addone(num){
    return num + 1
    
}

addtwo(9)
const addtwo = function(num){
    return num + 2
}
//gives an error as they also declared as an variable 


