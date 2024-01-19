// switch case
const user_data = {
    email: "lsharmanshivli@mail.com",
    password:"132431356"

}
switch (user_data.email && user_data.password) {
    case "lsharmanshivli@mail.com":
        console.log("napovnia")
     break;
 case "132431356":
    console.log("napovnia")
    break;
    default:
        console.log("ar aris napovni")
        break;
}


//switch case execises

let dayOfWeek = prompt("Enter a day of the week (e.g., Monday):");

switch (dayOfWeek) {
  case "monday":
    console.log("It's the start of the workweek.");
    break;

  case "tuesday":
  case "wednesday":
  case "thursday":
    console.log("It's a workday.");
    break;

  case "friday":
    console.log("Weekend is almost here!");
    break;

  case "saturday":
  case "sunday":
    console.log("It's the weekend. Enjoy!");
    break;

  default:
    console.log("Invalid input. Please enter a valid day of the week.");
}










// if else execises





//Print “Number is even” if the number is divisible by 2.
//Else print “Number is odd” if the number returns a remainder when divided by 2.

// let number = 5

// if(number % 2 ===0){
//     console.log("number is even")
// } else{
//     console.log("number is odd")
// }

//finds the largest between two number by using “>” and “=” operator in JavaScript.

// let num1 = 10
// let num2 = 20

// if(num1 >num2){
//     console.log(`${num1} is the largest`)
// } else
// {
//     console.log(`{num2} is the largest `)
// }
  
//Print num1 is the largest if num1>num2 and num1>num3.
//Print num2 is the largest if num2<num3.
//Else print num3.
 
// let num1 = 30;
// let num2 = 10;
// let num3 = 20;


// if(num1 > num2 && num1 > num3){
//     console.log(`${num1} is the largest`)
// } else if(num2 <num3){
//     console.log(`${num2} is the largest`)
// } else {
//     `${num3} is the largest`
// }

// Write a program that determines whether a given number is positive or negative.

// let number1 = prompt("write number");
//  if(number1 > 1){
//     console.log(" given number is positive")
//  } else if (number1 <1){
//     console.log("number is negative")
//  } else {
//     console.log("number is not found")
//  }

//Write a program that calculates a discount based on the purchase amount.
//Prices equal or over 100 discount have a discount of 20. 
//Prices equal or over 50 have a discount of 10. Otherwise discount is 0


// let price = prompt("enter your price")
// if(price >= 100){
//     console.log("you have a discount of 20")
// } else if (price >= 50) {
//     console.log("you have a discound of 10")
// } else{
//     console.log("discound is 0")
// }


//funqcia

function myName () {
    let num=10;
    console.log(num*10)
}
myName()
//funqcia gvexmarbe ashevkmnat rame logika romelic shegvidzlia ramenjerme gamovikenot
 

function user(){
if(user == "") {
    console.log("user is found")
} else {
    console.log("user not  found")
}


}

user()
//parametria rsac funqciis gamodzaxebis dros vatant da
// argumenti rasac funqciis gamodzaxebis shemdeg vigebt 
//anu arametri gavatane da shesabamisi arfgumeni miviget 
//parametri gvekneba ramdenic gvinda



//es5 :



function me (names,age,email,adress){
    console.log(names,age,email,adress);
}
me("lika",23,"likagmail.com","georgia");



// current time
let date = new Date();
console.log(date)

//es6 :
// () => {} es aris tavidan bolomde funqcia
// arrow function radgna isrit vakavshirebt
const mynames = (names,age) => {
   let mynames = names;
   let myage = age;
   return `my name is ${names} and i am ${myage}`
}
console.log(mynames ("lika",23))



//returni gvibrunebs ragac konkretuls is wkvets funqciis logikas
//rasac mas gadavcemt mere agar shegvidzlia ramis dawera 
//is avtomaturad abrunebs mteli funqciis logikas 

//pirveli koveltvis eshveba return  da ra logikac   masshia 



