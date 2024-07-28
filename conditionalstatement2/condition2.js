// Problem 1
var num=455;
if (num > 0) {
    console.log("The number is positive");
}
else if (num == 0) {
  console.log("The number is zero");
}
else {
     console.log("The number is negative");
}
console.log("");


// Problem 2
var marksmath=84;
var markschemistry=94;
var marksenglish=99;
var markshindi=78;
var sum_of_marks= markschemistry+marksenglish+markshindi+marksmath;

let percentage = (sum_of_marks / 400) * 100;
if (percentage <= 100 && percentage >= 90) { 
    console.log(" You're grade is A");
  } else if (percentage <= 89 && percentage >= 70) { 
    console.log("You're grade is B"); 
  } else if (percentage <= 69 && percentage >= 50) { 
    console.log("You're grade is C"); 
  } else if(percentage <= 49 && percentage >= 30){
    console.log("You're grade is D"); 
  } else {
    console.log("You're grade is F");
 }
 console.log("");
 
// problem 3
var age = 16;
if(age>=18){
    console.log("You'are an adult");
}
else{
    console.log("You're a minor");
}
console.log("");

// Problem 4
var year = 2320;
if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}
console.log("");

// Problem 5

var gender = "male"
var age = 45;

if(gender=="female"){

  if(age >= 18){
        if(age <= 35){
          console.log("Congratulations Lady!, You're eligible for marriage.");
        }
       else{
         console.log("Sorry, You're getting old soon.");
       }
  }
  else{
    console.log("Sorry, You're still chhoti.");
  }
  
}
else if(gender =="male"){

  if(age >= 21){
    if(age <= 40){
      console.log("Congratulations Man!, You're eligible for marriage.");
    }
   else{
     console.log("Sorry, You're getting old soon.");
   }
  }
  else{
  console.log("Sorry, You're still chhota.");
  }
  
}
else{
  console.log("Invalid Gender, Please try again.");
}
console.log("");


// Problem 6


// Create a program to determine if a person is eligible to obtain a driver's license.
// If the person is 16 or older, check if they have passed the written test. If they
// have passed the written test, they are eligible for a driver's license; otherwise,
// they are not eligible.

var age = 45;
var writtenText= true;
if(age>=16){
    console.log("You are older or equal to the age 16");
    if(writtenText== true){
        console.log("Congrulations, you are eligible for a driver's license");
    }
    else{
        console.log("Congrulations, you are not eligible for a driver's license");
    }
}
else{
    console.log("Sorry, you are too young for it, so you are not getting any driver's license");
}
console.log("");

// Problem 7
// If the order total is $50 or more, the customer is eligible for free delivery.
// If the order total is less than $50, check the customer's loyalty status:
// If the customer is a loyalty member (yes/no), they are eligible for free
// delivery.
// If the customer is not a loyalty member, check the distance from the
// restaurant to the delivery address:
// If the distance is less than 5 miles, the customer is eligible for free
// delivery.
// If the distance is 5 miles or more, delivery is not free
var totalOrder = 45;
var loyaltyMember = "no";
var distance = 6;
console.log("Your total order is of", totalOrder, "$ and the distance is of", distance, "miles.");
if(totalOrder >= 50){
    console.log("Dear customer, many many congratulations, you are getting free delivery.");
}
else{
    if(loyaltyMember == "yes"){
        console.log("Dear customer, many many congratulations, you are getting free delivery.");
    }
    else{
        if(distance <= 5){
            console.log("Dear customer, many many congratulations, you are getting free delivery.");
        }
        else{
            console.log("Sorry, you are not getting any free delivery.");
        }
    }
}