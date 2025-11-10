// print numbers from 0 to 100;
// let num;
// for(num = 0;num<=100;num++){
//     if(num % 2 == 0){
//         console.log("even number = ",num);
//     }
// }

// Guess the number game practice;

let gameNum = prompt("Enter the game number");
let userNum = prompt("Guess the number");

while(userNum != gameNum){
    userNum = prompt("You entered the wrong number. Guess again");
}

console.log("Conratulation, you enter the right number");