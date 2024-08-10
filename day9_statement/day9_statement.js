//Problem 1
// Write a JavaScript program to check if a given year is a leap year or not. Implement the solution using a while loop.
var year=2034;
while(year>0){
    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
          console.log(year + ' is a leap year');
        }
        else{
            console.log(year + ' is not a leap year');
        }
    }
console.log("year");
console.log("");


// Problem 2

//Write a program that converts a numerical month (1 for January, 2 for February, etc.) into the name of the month using a switch statement.
var b = "";

    switch(a){
        case 1: b = "January";
            break;
        case 2: b = "February";
            break;
        case 3: b = "March";
            break;
        case 4: b = "April";
            break;
        case 5: b = "May";
            break;
        case 6: b = "June"; 
            break;
        case 7: b = "July";
            break;
        case 8: b = "August";
            break;
        case 9: b = "September";
            break;
        case 10: b = "October";
            break;
        case 11: b = "November";
            break;
        case 12: b = "December";
            break;
        }

