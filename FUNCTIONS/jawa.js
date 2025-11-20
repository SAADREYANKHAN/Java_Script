// Functions and Methods;
// function car(){
//     string = prompt("Enter car color");

//     if(string === "black"){
//         console.log("it is sevic new version");
//     }else{
//         console.log("it is the old version");
//     }
// }

// car();


// parameterized function;

function fun(fun){
    console.log(fun);
}
fun("hi am practicing jawa script");

function sum(a,b){
    let sum = a + b;
   // console.log("The sum is = ",sum);
   return sum;
}
console.log(sum(10,20));

// Arrow functions;

function sum(a,b){
    return a+b;
}

//Multiply
function mul(x,y){
    return x*y;
}

const arrowSum = (a,b) => {
    console.log(a+b);
}
arrowSum(10,100);

const arrowMul = (a,b) => {
    let mul = a*b;
    console.log(mul);
}
arrowMul(100,200);