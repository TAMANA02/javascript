const score = 500
//console.log(score)//200

const scorecard = new Number(200)
//console.log(scorecard)//[Number: 200]

//console.log(scorecard.toString().length)//3
//console.log(scorecard.toFixed(2))//-->200.00

const othernumber = 123.9809
//console.log(othernumber.toPrecision(2))//1.2e+2
//console.log(othernumber.toPrecision(3))//124

const hundreds = 1000000000
//console.log(hundreds.toLocaleString('en-IN'))//1,000,000,000
//1,00,00,00,000
//there are minvalue,maxvalue,maxsafeinteger,minsafeinteger

//-----------------------------MATHS------------------------------------


//console.log(Math)//Object [Math] {}
//console.log(Math.abs(-4))//4
//console.log(Math.round(8.77))//9
//console.log(Math.ceil(4.2));//5
//console.log(Math.floor(5.9));//5

//console.log(Math.min(3,4,5,6,2))//2
//console.log(Math.max(3,2,4,8,9,7,))//9

console.log(Math.random())
//every time we run this we got any random values
console.log((Math.random()*10)+1)//always get a positive value

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1))+min)//always getting a value greater than or equal to min value that is 10