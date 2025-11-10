// SUM OF N NUMBERS;
// let n = prompt("enter the value of n");
// let sum = 0;
// for(let i = 1; i<=n;i++){
//     sum = sum + i;
// }
// console.log(" sum = ",sum);

// FOR OF LOOP;

// let str = prompt("Enter the string");
// let size = 0;

// for(let char of str){
//     console.log("char = ",char);
//     size++;
// }

// console.log("size of the string is = ",size);

// FOR IN LOOP;
// This loop is used we want to ittreate on the object properties that is;

let Aslam = {
    name : "Aslam",
    rollNo : 36,
    cgpa : 3.5,
    age : 19,
};

for(let key in Aslam){
    console.log(key ,"  = " , Aslam[key]);
}
