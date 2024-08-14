// problem 1
//Write a program to find and display both the smallest and largest elements in an array without sorting the array.I am trying to write an algorithm that finds and smallest and largest value in an array, and the second largest and second smallest.

    let Arr = [50, 60, 20, 10, 40];
    let minValue = Infinity;
    let maxValue = -Infinity;

    for (let item of Arr) {

        // Find minimum value
        if (item < minValue)
            minValue = item;

        // Find maximum value
        if (item > maxValue)
            maxValue = item;
    }

    console.log("Minimum element is:" + minValue);
    console.log("Minimum element is:" + maxValue);
    console.log("");

// Problem 2
//Write a program to add two arrays element-wise and create a new array with the results    

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
console.log("");


// problem 3
//Write a program to find the intersection of two arrays (elements that are common in both arrays) and store the result in a new array.
let first_array = [1, 3, 5, 7, 9];
let second_array = [2, 3, 4, 5, 6, 9];

let new_array = first_array.filter(
    (element) => second_array.includes(element));

console.log("Array obtained is :");
console.log(new_array);
console.log("");



// problem 4
//Write a program to check if an array is a palindrome (reads the same forwards and backwards).
function isPalindrome(str) {
	let j = str.length - 1
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] != str[j]) {
			return false;
		}
		j--;
	}
	return true;
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log("");

// problem 5
//Write a program to remove duplicate elements from an array without using built-in methods.
let arr = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr) {
return arr.filter((item,
  index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));
console.log("");

// problem 6
//Write a program to filter out even and odd numbers from an array and create two separate arrays for even and odd numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);
console.log("");

// problem 7
//Write a program to filter out all strings from an array that have a length greater than a specified value.
function letterCounter(str) {
    let count = 1;
    let wordSplit = str.split(" ")
    console.log(wordSplit)
    let filtered = wordSplit.filter( function( element ) {
        console.log(element.length + " " + element)
    });
    return filtered;
}

console.log(letterCounter("they say programming is fun but it is not"));
console.log("");

//problem 8
//Write a program to filter out all prime numbers from an array and create a new array with only the prime numbers.
const array=[-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function isPrime(num){ 
    for (i=2;num>i; i++){
        if(num%i==0){
            return false;
          }
        }
        return num>1;
    }

console.log(array.filter(isPrime));

































