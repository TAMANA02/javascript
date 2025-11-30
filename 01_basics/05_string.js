const name="tamana"
const repocount=51

//console.log(name + repocount+ "of the value")//-->tamana52of the value

//string interpolation-- make placeholder // back tricks

//console.log(`hello my name is ${name} and my repo count is ${repocount}`);//-->hello my name is tamana and my repo count is 51

const gamename = new String('tamana-vb-hello')

//console.log(gamename[0]);//-->t
//console.log(gamename.__proto__);//-->{}object
//console.log(gamename.length)//-->6
//console.log(gamename.toUpperCase())//-->TAMANA
//console.log(gamename.charAt(4))//-->n
//console.log(gamename.indexOf('a'))//-->1

const newstring=gamename.substring(0,3)
console.log(newstring)//-->tam

//const anotherstring=gamename.slice(0,5)
//console.log(anotherstring)//-->taman

const anotherstring=gamename.slice(-5,5)
console.log(anotherstring)//-->aman

const newstringone = "    brinjal   "
console.log(newstringone);//    brinjal   
console.log(newstringone.trim());//brinjal

const url = "https://google.com/google%20com"
console.log(url.replace('%20','-'))//-->https://google.com/google-com

console.log(url.includes('google'))//-->true

console.log(gamename.split('-'));//-->[ 'tamana', 'vb', 'hello' ]