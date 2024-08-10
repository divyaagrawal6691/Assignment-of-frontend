//. Chessboard Pattern: Write a program to create an 8x8 chessboard pattern using nested loops. Use 'X' and 'O' to represent the squares.

var chessboard = document.getElementById('chessboard');
for (var i = 0; i < 8; i++) {
   for (var j = 0; j < 8; j++) {
      var chessSquare = document.createElement('div');
      chessSquare.className = 'chess-square';
      if ((i + j) % 2 == 0) {
         chessSquare.style.backgroundColor = '#000';
      }
      chessboard.appendChild(chessSquare);
   }
}
console.log("");



// Patterns questions
//Number Patterns: Write a program to print patterns of numbers, such as the number pyramid or the following sequence: 1, 12, 123, 1234, 12345

//1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 
const n1 = 5;
for (let i = 1; i <= n1; i++) {
	let str = '';
	for (let j = 1; j <= i; j++) {
		str += j + ' ';
	}
	console.log(str);
}
console.log("");

// * * * * *
// *       *
// *       *
// *       *
// * * * * *


let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= 5; num++) {
      // print star only if it is the boundary location
      if (n == 1 || n == rows) pattern += "*";
      else {
         if (num == 1 || num == 5) {
            pattern += "*";
         } else {
            pattern += " ";
         }
      }
   }
   pattern += "\n";
}
console.log(pattern);
console.log("");

//       *
//     * * *
//   * * * * *
// * * * * * * * 


let rows2 = 4;
let pattern2 = "";
for (let n = 1; n <= rows2; n++) {
   for (let space = 1; space <= rows2 - n; space++) {
      pattern2 += " ";
   }
   for (let num = 1; num <= 2 * n - 1; num++) {
      pattern2 += "*";
   }
   pattern2 += "\n";
}
console.log(pattern2);
console.log("");


// * * * * 
//   * * * 
//     * * 
//       * 

let n = 4;
for (let i = n; i >= 1; i--) {
    let str = "* ";
    let space  = '  ';
    console.log(space.repeat(n-i)+str.repeat(i));
}