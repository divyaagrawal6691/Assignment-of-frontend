// Problem 1
// Write a program to calculate the sum of all even numbers from 1 to 50 using a for loop.

sum_even = 0
sum_numbers = 0 

for (i=0;i<=51;sum_even += i) {
    if(i % 2 == 0){
        sum_numbers += i;
    }
 }
 
print("Sum of even numbers from 1 to 50:", sum_even) 
print("Sum of numbers from 1 to 50:", sum_numbers) 
console.log("");

// Problem 2
//Write a program to print the first 10 natural numbers in reverse order using a for loop.


print("The First 10 Natural Numbers in Reverse")
i = 10;
for(i=10;i >= 1;i=i-1){
    print(i);
}
console.log("");

//Problem 3
//Write a program to generate the multiplication table of a given number (e.g.,7) using a for loop

 var n, result;
 for(i=1;i<=10;i++){
    result=n*i;
    console.log(n + "*" + i + "=" + result);
}
console.log("");

//Problem 4
//Write a program to find and display all the prime numbers between 1 and 100 using a for loop.

let count = 0;
  for(let i = 2; i <= num; i++){
    let isPrime = true;
    for(let j = 2; j < i; j++){
      if(i % j == 0){
        isPrime = false;
        break;
      }
    }
    if(isPrime){
      count++;
      console.log(i);
    }
  }
  return count;

console.log(countPrimes(100));
console.log("");


// Problem 5
// Write a program to calculate the factorial of a given number (e.g., 5) using a for loop.
var n, r=1;
for(i=1;i>=1;i++){
    r=r*i;
}
console.log("The factorial of this number: ");
console.log("");

// Problem 6
//Write a program to reverse a given string using a for loop (without using built-in reverse functions).
let original = "Hello World";
let reversed = "";
for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}
console.log(reversed);
console.log("");

// Problem 7
//Write a program to check if a given number is a palindrome (e.g., 121 or 1331) using a for loop.
var n, rem, rev=0;
for(i=0;n>0;n=n/10){
    rem=n%10;
    rev=rev*10+rem;
    if(n==r){
        console.log(n+ "is a palindrome number..");
    }
    else{
        console.log(n+ "is not a palindrome number..");
    }
}