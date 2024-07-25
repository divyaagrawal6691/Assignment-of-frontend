// Probelm 1
let number = 6;
let square = number ** 2;

console.log(square);

// Problem 2

// Problem 3
let x = 10, y = 5;
console.log("Before Swapping: x = " + x + ", y = " + y);

x = x + y;
y = x - y;
x = x - y;

console.log("After Swapping: x = " + x + ", y = " + y);


// Problem 4
let c = 50;
let f = 0;
f = (c * 9 / 5) + 32;
console. log("The value of the temperature in Fahrenheit is " + f);

// Problem 5

function isMultipleof5 (n)
{
    while (n > 0)
        n = n - 5;
 
    if (n == 0)
        return true;
 
    return false;
}
let n = 19;
    if (isMultipleof5(n) == true)
        console.log(n + " is multiple of 5\n");
    else
        console.log(n + " is not a multiple of 5\n");



// Problem 6

function area(length, width) {
    var result = parseInt(length) * parseInt(width);
    console.log("output") = result;
}


