// var number1 = 34;
// var number2 = 56;

// console.log(number1+number2);

//data types in JavaScript..
// 1.Numbers
//  var num1 = 455;
//  var num2 = 56.76;
//   console.log(num1);
//   console.log(num2)

// 2.String
//  var str1 = "This is a strings";
//  var str2 = "This is a also a strings";
//   console.log(str1);
//   console.log(str2)

// 3.Object
//  var marks = {
//     shani : 34,
//     subhan: 78,
//     jamil : 99.97
//  }
//  console.log(marks)

// 4.Booleans
//  var a = true;
//  var b = false;
//   console.log(a);
//   console.log(b)

// 5.Undefined
// 6.Null

// At a very high level, there are two types of data type in JavaScript.
//1. Premative Data Types: Undefined, Null, number, string, boolean, symbol..
//2. Reference Data Types: Arrays and Objects..

// Array
//  var arr = [1,2,3,4,5];
//  console.log(arr[0])
//  console.log(arr[1])
//  console.log(arr[2])
//  console.log(arr[3])
//  console.log(arr[4])

//  var arr = [1,2,"Shahid",4,5];
//  console.log(arr[2])

// Arthmetic operators
// var a = 100;
// var b = 20;

// console.log("The value of a+b is", a+b);//110
// console.log("The value of a-b is", a-b);//90
// console.log("The value of a*b is", a*b);//1000
// console.log("The value of a/b is", a/b);//10

// Assignment Operators
// var c = b;
// c = b;
// console.log(c);//10
// var b=10;
// var c = b;
// // c+=10;//12
// // console.log(c);
// // c-=4;
// // console.log(c);
// c*=2; //12
// console.log(c);

// Comparrison Operators

// var x = 100;
// var y = 50;
// console.log(x >= y);//true
// console.log(x <= y);//false
// console.log(x == y);//false
// console.log(x > y);//true
// console.log(x < ys);//false

// function avg (a,b){
    // c=(a+b)/2;
    // return c;
// }
// c1 = avg (4,6); //5
// c2 = avg (14,16); //15
// console.log(c1,c2);

// var age = 9;
// if (age > 8){
    // console.log('You are not a kid');
// }else {
    // console.log('You are a kid')
// }
// var age = 27;
// if(age > 32){
    // console.log("You are not a kid");
// }
// else if(age > 26){
    // console.log('Yes Bachi nahi rahi');
// }
// else if(age > 18){
    // console.log('Bachi Rahi')
// }
// console.log('End of Ladder');
// 

// For Loops
// var arr = [1, 2,3,4,5,6,7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
// console.log(arr[i])
// }
var arr = [1, 2,3,4,5,6,7];
arr .forEach(function(element) {
    console.log(element)    
});