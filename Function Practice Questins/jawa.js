// Count the vowels in the string;

function countVowels(str) {
  let count = 0;
  for (let v of str) {
    if (
      v === "a" ||
      v === "e" ||
      v === "i" ||
      v === "o" ||
      v === "u" ||
      v === "A" ||
      v === "E" ||
      v === "I" ||
      v === "O" ||
      v === "U"
    ) {
      count++;
    }
  }
  console.log(`There are ${count} vowels in the string`);
}

countVowels("SAaD ReYAN KHaN");

// ArrowFunction

const arrowStr = (str) =>{
    let count = 0;
  for (let v of str) {
    if (
      v === "a" ||
      v === "e" ||
      v === "i" ||
      v === "o" ||
      v === "u" ||
      v === "A" ||
      v === "E" ||
      v === "I" ||
      v === "O" ||
      v === "U"
    ) {
      count++;
    }
  }
  console.log(`There are ${count} vowels in the string`);
}

arrowStr("hello to the world of functions");