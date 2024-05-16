/* ### Exercise #3.1

Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.001) interest fee.
Can you help her calculate her costs?

Return the value of what she should be paying. */

//K.Q solution
 const totalCost = startMoney => {
    const transactionFee1 = 3;
    const transactionFee2 = 0.001;
    const interestFee = (startMoney*transactionFee2)+transactionFee1 ;

    return interestFee + startMoney ;
  };
  
  console.log(`Total payment for the month: ${totalCost(1234)}$`); // Output : Total payment for the month: 

 //K.Neeti solution
let totalPayment = 0; 

let transactions = [];

function getTotalCost(transactions) {
  transactions.forEach((item) => {
    totalPayment = totalPayment + item.price + 3 + item.price * 0.001;
  });
  return totalPayment;
}

let thisMonthTransactions = [
  { name: "Item1", price: 10 },
  { name: "Item2", price: 10 },
  { name: "Item3", price: 10 },
];

console.log(getTotalCost(thisMonthTransactions)); 

/* ### Exercise #3.2

#### Part 1

Ed would like a way to input 3 names of his friends.
The output should be a console greeting to his friends saying:
`Welcome {name1}, {name2}, {name3}.` */

const friendName = (name1,name2,name3) => {
    console.log(`Welcome ${name1}, ${name2}, ${name3}`)
};

friendName("jingjate","jongjet","jamjan")

/*  #### Part 2

Ed would like to create a function that takes in a birth year and returns the age.

i.e. 1990 returns 30 */

 const calculateAge = birthYear => {
    const currentYear = new Date().getFullYear();
    let Age = currentYear - birthYear;
    
    return Age;

};

console.log(calculateAge(2000)+` year old`);


/* 
#### Part 3

Ed would like to create a function that prints out,
`Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.` */ 

const friendNameAge = (name1,birthYear1,name2,birthYear2,name3,birthYear3) =>{
    let age1 = calculateAge(birthYear1)
    let age2 = calculateAge(birthYear2)
    let age3 = calculateAge(birthYear3)
console.log(`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`)
};

friendNameAge('Ant',2000,'bee',1993,'cat',1990)


