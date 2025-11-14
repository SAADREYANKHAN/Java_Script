// find the average marks of the entire class;

let sum = 0,average = 0;
let marks = [85,97,44,37,76,60]; 

// Find sum of the marks
for(let i of marks){
    sum += i;
}

console.log("sum of the marks = ",sum);
// now find the average

average = sum/marks.length;
console.log(`Average marks of the class is = ${average}`);