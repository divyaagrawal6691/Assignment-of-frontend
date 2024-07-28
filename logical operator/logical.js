// Problem 1

// program for inventory management. If an item is
// out of stock (isOutOfStock is true), display a notification. Use the logical
// NOT operator to check if the item is in stock.

var isOutOfStock = true;
if(isOutOfStock){
    console.log("The item is in stock");
}
else {
    onsole.log("The item is not in stock");
}
console.log("");

// Problem 2
//  Build a weather app that informs users about the
// weather conditions. If the weather forecast predicts no rain (!isRaining),
// display a message indicating that it's a good day for outdoor activities.

var isRaining =false;
if(!isRaining){
    console.log("it's a good day for outdoor activities.");
}
else{
    console.log("it's not a good day for outdoor activities.");
}
console.log("");

// Problem 3

// program for a website login system. Users should be
// authenticated if they enter the correct username and password. If the user
// enters the wrong password (enteredPassword !== correctPassword),
// display an error message. Use the logical NOT operator to perform this
// check.

var correctUsername = "admin"
var correctPassword = "12345"

var enteredUsername = "admin"
var enteredPassword = "12345"

if(correctUsername == !enteredUsername && correctPassword == !enteredPassword){
    console.log("Error message");
}
else{
  console.log("Login Successfully");
}
console.log("");


// Problem 4

// determine if a given character is a vowel or a
// consonant. If the character is a lowercase or uppercase vowel (a, e, i, o, u,
// A, E, I, O, U), consider it a vowel; otherwise, consider it a consonant.

var char = 't'
if(char=='a' || char =='e' || char=='u' || char =="o" || char =="i"){
    console.log(char,"is vowel");
}
else{
    console.log(char,"is consonant");
}
console.log("");

// Problem 5

// determine if a given temperature is within a
// comfortable range for outdoor activities. If the temperature is between 65°F
// and 85°F (temperature >= 65 && temperature <= 85), it's considered
// comfortable. If it's outside this range, it's either too hot or too cold for outdoor activities.

var temperature= 78;
if(temperature >= 65 && temperature <= 85){
    console.log("it's considered comfortable");
}
else{
    console.log("If it's outside this range, it's either too hot or too cold for outdoor activities.");
}
console.log("");

// Problem 6

// Write a program that checks whether a person can vote.
// To be eligible, a person must be at least 18 years old and a citizen of the country.

var age= 2;
var citizen_of_the_country = true;
if(age >= 18 && citizen_of_the_country ==true){
    console.log("It is eligible for vote");
}
else{
    console.log("It is not a eligible for vote");
}
console.log("");


// Problem 7

// : Create a program for a store that offers a discount on a
// purchase. To receive the discount, customers must have a valid membership card (hasMembershipCard) and spend more than 2000
var membershipcard= true;
var value_items=2000;
if(value_items>=2000 && membershipcard==true){
    console.log("Getting offers a discount on a purchase goods...");
}
else{
    console.log("Error 404");
}
console.log("");


// Problem 8

// t: Build an online shopping website that discounts
// orders. Customers are eligible for the discount if they purchase at least two
// items (numItems >= 2) and the total order value exceeds 5000
// (totalOrderValue > 5000).

var numItems=2;
var total_order_items=93662;

if(numItems>=2 && total_order_items){
    console.log("Online shopping website with discount orders");
}
else{
    console.log("Error Exception");
}
console.log("");

// Problem 9

// decide where to have dinner with your family. If your
// favorite restaurant has a discount (isSpecialOffer) or you're craving pizza
// (cravingPizza), choose one of those options; otherwise, cook dinner at
// home. Use the OR operator.

var isSpecialOffer=true;
var cravingPizza=true;
if(isSpecialOffer==true || cravingPizza==true){
    console.log("choose one of those options for restaurant..");
}
else{
    console.log("Cook at the dinner...");
}
