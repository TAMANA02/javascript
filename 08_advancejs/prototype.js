
// let myName = "tamana       "
// let myChannel = "chai      "
// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy poer is ${this.spiderman}`)
    }
}

Array.prototype.heytamana = function(){
    //console.log(`tamana says hello,`);
}

Object.prototype.tamana = function(){
   // console.log(`tamana is present in all object`);
}
// heroPower.tamana()
// myHeros.tamana()
// myHeros.heytamana()
//heroPower.heytamana()


//inheritance


const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
   makeVideo: true
}

const TeachingSupport = {
   inAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS assingment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user


//modern syntex

Object.setPrototypeOf(TeachingSupport , Teacher)


let anotherUsername = "chaiorcode       "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"tamana".trueLength()
"Icetea".trueLength()