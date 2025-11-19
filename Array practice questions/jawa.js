// find the average marks of the entire class;

// let sum = 0,average = 0;
// let marks = [85,97,44,37,76,60]; 

// // Find sum of the marks
// for(let i of marks){
//     sum += i;
// }

// console.log("sum of the marks = ",sum);
// // now find the average

// average = sum/marks.length;
// console.log(`Average marks of the class is = ${average}`);

// Find the offer price after 10% off on original price of items;

// let items = [250,645,300,900,50];

// for(let i = 0; i< items.length;i++){
//     console.log(`Original price of the item is = ${items[i]}`);
//     let offer = items[i]/10;
//     items[i] = items[i] - offer;
//     console.log(`Ater offer the price of item is = ${items[i]}`);
// }

// solve problem using the concept of array methods;

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(`The companies names are : `);
console.log(companies);

//Remove the first company
console.log("Now using shif() to remove the first company");
let del = companies.shift();
console.log(del," is removed"); 
console.log(companies);

//Remove Uber and replace Ola in its place; 
console.log("REmove Uber and replace Ola in its place");
companies.splice(1,1,"Ola");
console.log(companies);

//Now add amazon at end and Blooming at the start;
console.log("Now add amazon at end ");
companies.push("Amazon");
companies.unshift("Blooming")
console.log(companies);