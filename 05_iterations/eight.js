const myNums = [1,2,3,4]

// const newNums = myNums.reduce( function (accumulator, currentvalue) {
//     console.log(`Accumulator:${accumulator} and currentvalue:${currentvalue}` );
//     return accumulator + currentvalue
// },0)  // initial value of accumulator

const mytotal = myNums.reduce((accumulator, currentvalue) => {return accumulator+currentvalue},0)

console.log(mytotal);


const shoppingcart = [
    {productname : "Laptop",
         price : 30000, 
         quantity : 1
        },

    {productname : "Mobile",
         price : 20000,
          quantity : 2
        },

    {productname : "Headphones", 
        price : 5000,
        quantity : 4
    },
]

const pricetopay = shoppingcart.reduce( (acc, product) => acc + product.price,0)
console.log(pricetopay);

const totalitems = shoppingcart.reduce( (acc, product) => acc + product.quantity ,0)
console.log(totalitems);