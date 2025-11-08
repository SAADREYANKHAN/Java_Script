// prompt is like a messege which display on website with some input information;
// console.log("Check if the number is multiple of 5 or not");
// let num = prompt("Enter any number");
// if(num % 5 ===0){
//     console.log(num,"is multiple of 5");

// }else{
//     console.log(num,"is NOT multiple of 5");
// }


// give grades to the students ;

let marks = prompt("Enter student marks");

if(marks >=80 && marks <=100){
    console.log("GRADE A");
}else if(marks >= 70 && marks <80){
    console.log("GRADE B");
}
else if(marks >=50 && marks <70){
    console.log("GRADE C");
}else{
    console.log("Fail try agin in next exam");
}
