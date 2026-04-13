console.log("Hey hai")

/*
/*
var a=10
var b=20

//2.3 or 23 all are number datatype
// if we assign null the datatype is object
console.log(typeof a);

if(a>b){
    console.log("a is greater");
}else{
    console.log("b is greater");
}
*/

/*
var  a=10;
var b="10";

if(a==b) console.log(-1);

if(a===b) console.log(-1);//

console.log(2**3);
*/

/*
var n=10;
var count= 0;
var num=1;



while( count <= 10){
    var c=0;
for(let i=1;i<=num;i++){
   if(n%i==0){
      c++;
   }
}
if(c==2){
    count++; 
    console.log(num);
 }
  num++;
}




// types of variables

//var 

// var we can reassign and redeclare

var a=10
var a=20

console.log(a);// 20

// let we can reassign but not redeclare

let b=10;
//let a=20;   // SyntaxError: Identifier 'a' has already been declared
b=30;      // we can reassign a new value to 'a'

console.log(b);// 30


// we cannot reassign or redeclare act like final

const c=10;
//const c=20;   // SyntaxError: Identifier 'a' has already been declared
//c=30;      // we can reassign a new value to 'a'

console.log(c);



// Arrays in js

// Dynamic in nature stores multiple values and different data types in a single variable

// let arr=[10, 2.25,"Hello", true, null];

// for(let i=0;i<arr.length;i++){
//     console.log(typeof arr[i] + "   "+arr[i]);
// }       

// let arr2=[10, 20, 30, 40, 50];

// for(let i=0;i<arr2.length;i++){
//     console.log(arr2[i]);
// }

// arr2.push(60) // data like integer, string , boolean, null adds at index 5
// arr2.pop();  // removes the last element
// arr2.pop(100); // if we pass an argument, it will be ignored

// arr2.shift(); // removes the first element
// arr2.unshift(5); // adds an element to the beginning
*/

//Object Creation 

// const obj={
//     id : 101,
//     name : "Praveen",
//     arr :[10,20,"name",true]
// }


// console.log(obj.loc);
// obj.loc="hyd"

// console.log(obj);


const user=[{id:101,name:"guest1",loc:"hyd"},{id:102,name:"guest2",loc:"Monali"}]

console.log(user);
console.log(user[0]);
console.log(user[0].id+" "+user[0].name+" "+user[0].loc);




