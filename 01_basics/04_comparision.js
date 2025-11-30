//console.log(2>1)-true
//console.log(2<1)-false
//console.log(2>=1)-true
//console.log(2==1)-false
//console.log(2!=2)-false


//avoid these types of codes 

//console.log("2">1) //-->true
//console.log("02">1) //-->true

//console.log(null>0) //-->false
//console.log(null==0) //-->false
//console.log(null>=0) //-->true (as in comparator operator null converts into a number null=0 oso the 0>=0 is true)

//console.log(undefined>0,<0,==0) // always gives false



//--------------strict check that is '==='---------------------
//it also checks the datatypes 

console.log("2"===2)//-->false as it checks the datatype of both the value 