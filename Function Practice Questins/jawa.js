// Count the vowels in the string;

// function countVowels(str) {
//   let count = 0;
//   for (let v of str) {
//     if (
//       v === "a" ||
//       v === "e" ||
//       v === "i" ||
//       v === "o" ||
//       v === "u" ||
//       v === "A" ||
//       v === "E" ||
//       v === "I" ||
//       v === "O" ||
//       v === "U"
//     ) {
//       count++;
//     }
//   }
//   console.log(`There are ${count} vowels in the string`);
// }

// countVowels("SAaD ReYAN KHaN");

// // ArrowFunction

// const arrowStr = (str) =>{
//     let count = 0;
//   for (let v of str) {
//     if (
//       v === "a" ||
//       v === "e" ||
//       v === "i" ||
//       v === "o" ||
//       v === "u" ||
//       v === "A" ||
//       v === "E" ||
//       v === "I" ||
//       v === "O" ||
//       v === "U"
//     ) {
//       count++;
//     }
//   }
//   console.log(`There are ${count} vowels in the string`);
// }

// arrowStr("hello to the world of functions");

//Q = 2 => Print the square of each value in the array using foreach function;

let array = [60,123,45,76,90,999];
console.log(`Using callback Function`);
array.forEach(function Square(numbers) {
  let square = numbers * numbers;
  console.log("Square of ", numbers, " is", square);
});

console.log(`Using arrow function`);
array.forEach((value) => {
  console.log("Square of ", value, " is ", value * value);
});

console.log(`Another way to write to write the for each loop`);

function square(abc){
  console.log(abc*abc);
}

array.forEach(square);