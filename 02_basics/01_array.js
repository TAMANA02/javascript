//array 

//const rray = [1,2,4,5,]
//console.log(array)

const myArray = new Array(2,4,6,8)
//console.log(myArray)

//array methods

//myArray.push(9)
//myArray.pop()
//console.log(myArray)

//console.log(typeof(myArray.includes(3)))//-->boolean
////console.log(myArray.indexOf(8))

//myArray.unshift(2)
//myArray.shift()
//console.log(myArray)

const newArray = myArray.join()
console.log(typeof(newArray))//-->string
console.log(typeof(myArray))//-->object


//slice,splice

console.log("A", myArray);//-->A [ 2, 4, 6, 8 ]
const myn1 = myArray.slice(1,3)
console.log(myn1)//-->[ 4, 6 ]
console.log("B", myArray)//-->B [ 2, 4, 6, 8 ]

const myn2 = myArray.splice(1,3)
console.log("C", myArray)//-->C [ 2 ]
console.log(myn2)//-->[ 4, 6, 8 ]