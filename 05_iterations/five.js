const codingLanguages = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'];


// codingLanguages.forEach(  function(item) {
//     console.log(item);
// })

// codingLanguages.forEach( (item) => {
//     console.log(item);
// })

// function printme(item) {
//     console.log(item);
// }

// codingLanguages.forEach(printme);


codingLanguages.forEach( (item,index ,arr) => {
    console.log(item , index , arr );
})


const mycodingLanguages = [
    {
        languagename : "JavaScript",
        type : "frontend"
    },
    {
        languagename : "Python",
        type : "backend"
    },
    {
        languagename : "Java",
        type : "fullstack"
    }
]
mycodingLanguages.forEach( (item) => {
    console.log(item.languagename)
})