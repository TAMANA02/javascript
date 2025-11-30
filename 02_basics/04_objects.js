//const TinderUser = new Object()
const TinderUser = {}


TinderUser.id = "123abc"
TinderUser.name = "samay"
TinderUser.isloggedin = false

//console.log(TinderUser)
//{ id: '123abc', name: 'samay', isloggedin: false }

const regularUser = {
    email: "sume@gmail.com",
    fullname:{
        userfullname:
        {
            firstname: "tamana",
            lastname: "shukla"
        }
    }
}

//console.log(regularUser.regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}
//const obj3 = {obj1 , obj2}

//const obj3 = Object.assign({},obj1,obj2)//{} this is an optional parameter 
//console.log(obj3)//assign is used for concatinate the objects in constructors and gives a new target value
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = {...obj1,...obj2}// this is spread means adding 
//console.log(obj3)


// for database values 

const users = [
    {
        id :1,
        email:"h@gmail.com"
    },
    {
        name:"hello"
    }
]

 //console.log(TinderUser);
 //{ id: '123abc', name: 'samay', isloggedin: false }
 //console.log(Object.keys(TinderUser));
 //[ 'id', 'name', 'isloggedin' ]
 //console.log(Object.values(TinderUser));
 //[ '123abc', 'samay', false ]

 //console.log(Object.entries(TinderUser))// array inside array 
//[ [ 'id', '123abc' ], [ 'name', 'samay' ], [ 'isloggedin', false ] ]
 //console.log(TinderUser.hasOwnProperty ("isloggedin"));
//true




const course ={
    coursename:"hjs in hindi",
    Price:99,
    courseInstrutor:"tamana"
}
 //course.courseInstrutor

 const{courseInstrutor:instructor} = course//destructuring
//console.log(courseInstrutor);
console.log(instructor);



//in react using this desturcturing

//const navbar = ({company}) =>{
//}
// navbar {company = "tamana"}

//{
  //  "name":"tamana",
  //  "coursename":"js in hindi",
   // "price":"free"
//}

//json is not always in object they are also in array format and using in API for fetching data


