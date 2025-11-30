const marvel_heros = ["thor", "ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.pusht(dc_heros)
//console.log(marvel_heros);//-->[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heros[3][1])//-->flash

const allvalue = marvel_heros.concat(dc_heros)
//console.log(allvalue)//-->[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread operator
const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros)

const another_array = [1,2,3,4,[2,4,3,4],6,5,[6,8,9,6,[7,9,8]]]
const real_another_array = another_array.flat(3)
//console.log(real_another_array)


console.log(Array.isArray("tamana"))
console.log(Array.from("tamana"))//-->change in array 
console.log(Array.from({name:"tamana"}))//-->it gives an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));//-->forms an array from the set of elements