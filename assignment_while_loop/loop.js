// Problem 1
//Write a JavaScript program to print numbers from 1 to 50.
var sp = 1;
while (sp <= 50) {
 console.log(sp);
 sp++;
}
console.log();


// Problem 2
//Write a JavaScript program to print the multiplication table of 5 up to 10.

var n = 6;
var i=1;
while(i<=10){
    console.log(n + " * " + i +" = " + n * i);
    i++;
}
console.log();

// Problem 3
//Write a JavaScript program to calculate the factorial of a given number
var n=8;
var i=1, fact=1;
while(i<=n)
{
  fact = fact*i ;
  i++;
}
console.log(fact);
console.log();


// Problem 4
//Write a JavaScript program to find the sum of digits of a positive integer.
var n = 123;
let sum = 0;
while (n > 0){
  sum += n % 10;
}
print(sum)
console.log();

// Problem 5
//Write a JavaScript program to find the sum of odd numbers from 1 to 50
let sum2 = 0;
var i=1;
while(i<=50){
  sum2+=i;
  i+=2;
}
console.log(sum2); 
console.log();

// Problem 6
//Write a JavaScript program to determine if a given number is prime or not

var num=8;
var isPrimeT=true;
var i=2;
while(i<isPrimeT){
  if(num%i==0){
    isPrimeT=false;
    break;
  }
  i++;
}
if(isPrimeT==false){
  console.log(num+" is not a prime number");
}
else{
  console.log(num+" is a prime number");
}
console.log();

// Problem 7
//Write a JavaScript program to reverse a given number.

let n, i=1;
var rem;
var reverse=0;
while(n>0){
  rem=n%10;
  reverse=reverse*10 + rem;
  n=n/10;
}
console.log("Reverse:");
console.log();


// Problem 8
//Write a JavaScript program to convert a decimal number to binary.
let N;
let i=1;
while (N > 0) {
  if(N%2!=0){
    console.log("1");
  }
  else{
    console.log("0");
  }
}
console.log();


// Problem 9
//Write a JavaScript program to determine if a given string is a palindrome.

let n, i=1;
var rem;
var reverse=0;
while(n>0){
  rem=n%10;
  reverse=reverse*10 + rem;
  n=n/10;
  if(copy==rev)
    {
       console.log(copy+" is palindrome a number");
    }
    else
    {
       console.log(copy+" is not palindrome a number");
    }
}
console.log();


// Problem 10
//Write a JavaScript program to find the greatest common divisor (GCD) of two positive integers.

x = Math.abs(x);
y = Math.abs(y);
while(y) {
  var t = y;
  y = x % y;
  x = t;
}
return x;
console.log(gcd_two_numbers(12, 13));
console.log(gcd_two_numbers(9, 3));