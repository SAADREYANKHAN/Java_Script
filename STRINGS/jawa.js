// let str = "saad reyan khan"
// console.log(str);
// console.log(str.length);

// for(let i = 0;i<str.length;i++){
//     console.log("index",i,"=",str[i]);
// }

// // Templete Literals;

// let string = {
//     obj : "pen",
//     price : 100,
// };

// let str1 = `the object is ${string.obj} and its price is ${string.price}`;
// console.log(str1);

// STRINGS METHODS;

let str = "    SAAD REYAN KHAN    ";

//upper case
console.log("COnvert to upper case");
console.log(str.toUpperCase());

//lower case
console.log("COnvert to lower case");
console.log(str.toLowerCase());

//remove white spacees
console.log("trim function to remove the white spaces");
console.log(str.trim());

//replace string values by others
console.log(str.replace("S","Y"));
console.log(str.replace("KH","J"));

// concat function is used to add to strings;
let str2 = "from uet Mardan";
let res = str.concat(str2);
console.log(res);

// slice function to print some part of the string
console.log(str2.slice(0));

//charAt to print the value at specific index
console.log(str2.charAt(9));


