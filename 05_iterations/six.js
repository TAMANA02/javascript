//const coding = ["JavaScript", "Python", "C++", "Java", "Ruby"]

// const values = coding.forEach((item) => {
//     //console.log(item)
//     return item
// });

// console.log(values); // undefined


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//    return  num > 4 //filter takes callback 
// } )  // without return the output is empty array


//  const newNums = []

//  myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
//     })


// console.log(newNums);


const books = [
    {tittle :  "Book One", author : "Author One" , publish:2009},
    {tittle :  "Book Two", author : "Author Two" , publisg:2015},
    {tittle :  "Book Three", author : "Author Three" , publish:2011},
    {tittle :  "Book Four", author : "Author Four" , publish:2020},
    {tittle :  "Book Five", author : "Author Five" , publish :2005},
    {tittle :  "Book Six", author : "Author Six" , publish:2018},

];

let userbook = books.filter( (book) => book.tittle === "Book Three")
 userbook  = books.filter( (book) =>{ 
    return book.publish >= 2010 && book.publish <=2020
})
 console.log(userbook);