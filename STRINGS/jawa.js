let str = "saad reyan khan"
console.log(str);
console.log(str.length);

for(let i = 0;i<str.length;i++){
    console.log("index",i,"=",str[i]);
}

// Templete Literals;

let string = {
    obj : "pen",
    price : 100,
};

let str1 = `the object is ${string.obj} and its price is ${string.price}`;
console.log(str1);