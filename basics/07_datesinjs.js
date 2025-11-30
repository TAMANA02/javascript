//dates

let mydate = new Date()
//console.log(mydate.toString());
//console.log(mydate.toISOString());
//console.log(mydate.toJSON());
//console.log(mydate.toLocaleDateString());
//console.log(mydate.toLocaleString());
//console.log(typeof mydate);//--> object

//let mycreatedDate = new Date(2023,0,21)
let myCreatedDate = new Date(21-01-2024)
//console.log(mycreatedDate.toDateString());



let mytimeStamp = Date.now()
//console.log(mytimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getDate());
//console.log(newDate.getHours());
//console.log(newDate.getMonth());
//console.log(newDate.getTimezoneOffset());


newDate.toLocaleString('default',{
    weekday: "narrow"
})
