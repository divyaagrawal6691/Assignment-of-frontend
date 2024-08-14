// problem 1
//Write a program to reverse a given string. For example, if the input is "hello," the output should be "olleh."
let original = "Hello";
let reversed = "";
for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}
console.log(reversed);
console.log("");

// problem 2
//: Write a program to count the number of vowels and consonants in a given string.

const calcTypeOfLetters = (str) => {
    const res = { Vowels: 0, Consonants : 0 }
    const VOWELS = ["a","e","i","o","u"]
    
    for(let char of str){
      if(VOWELS.includes(char.toLowerCase())){
        res["Vowels"] = res["Vowels"] + 1
      }else {
        res["Consonants"] = res["Consonants"] + 1
      }
    }
    
    return res
  }
  
  console.log(calcTypeOfLetters("Pankaj Wadhwani"));
  console.log("");

  // problem 3
  //Write a program to check if a given string is a palindrome (reads the same forwards and backwards). For example, "racecar" is a palindrome.

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

// problem 4'
// Write a program to convert the first character of each word in a sentence to uppercase and the rest to lowercase.

// Define a function named capital_letter with parameter str
function capital_letter(str) 
{
    // Split the input string into an array of words
    str = str.split(" ");

    // Iterate through each word in the array
    for (var i = 0, x = str.length; i < x; i++) {
        // Capitalize the first letter of each word and concatenate it with the rest of the word
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    // Join the modified array of words back into a string
    return str.join(" ");
}

// Log the result of calling capital_letter with the given string to the console
console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string.")); 


// problem 5
//Write a JavaScript program that removes all occurrences of the character 'a' from a given string 
let inputStr = "Hello, Geeks!";
let removeStr = "e";
let result = inputStr.split(removeStr).join('');
console.log(result);




// problem 6
//You are given a lowercase string input . Your task is to convert this string to uppercase without using any built-in string methods.



var s = 'hello',
    result2 = '',
    lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function makeUpper(x) {
  let index = lower.indexOf(x);
  return index > -1 ? upper[index] : x;
}

result2 = [].map.call(s, makeUpper).join('');

console.log(result2);
