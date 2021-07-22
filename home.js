console.log("hello");
//alert("yoo");
//how to write comment inline

//variables
var b = "smoothie";
console.log(b);

var something = "avid reader";
console.log(something);

var someNumber = 45;
console.log(someNumber);

//document.getElementById("someText").innerHTML = 'heyy there';

//manipulate DOM with javascript
// its just fancy way of saying change HTML with javascript

//remove the comment and try it out
var age = prompt("what is your age");

document.getElementById("someText").innerHTML = age;

//Numbers in javascript
var num1 = 10;
//increment num1 by 1
num1++;

//decrement num1 by 1
console.log(num1);

//divide ,mutiply
console.log(num1 % 6);

/*Function
1.create a function
2.call the function
*/

//creating
function fun() {
  console.log("this is a function");
}

//calling
fun();

/*lets create a function that take in a name and says hello
followed by your name 
for example :
Name:"irusha"
Return: "hello irusha"
*/

// function greeting(){
//     var name = prompt('what is your name?');
//     var result = 'hello ' + name; //string concatenation
//     console.log(result);
// }
// greeting();

//how do arguments work in functions?
//how do we add two number in function?

function sumNumbers(num1, num2) {
  var result = num1 + num2;
  console.log(num1 + num2);
}

sumNumbers(10, 10);

//you have to write clean code ,just make sure you compare above with below,as you can see
function greeting(YourName) {
  var result = "Hello" + "" + YourName; //string concatenation
  console.log(result);
}
var name = prompt("What is your name ");
greeting(name);

//while loops
/*var num = 0;
while (num < 100){
    num+=1;
    console.log(num);
}
*/

//for loop
for (let num = 0; num < 100; num++) {
  console.log(num);
}

//data Types
let yourAge = 18; //number
let Name = { first: "jane", last: "doe" }; //object
let yourName = "BoB"; //string
let truth = false; //boolean
let gloceries = ["apple", "banana", "oranges"]; //array
let random; //undefined
let nothing = null; //value null

//strings in javascript (common method that you can use )

let fruit = "banana";
let moreFruits = "banana\napple";

console.log(fruit.length);
console.log(fruit.indexOf("nan"));
console.log(fruit.slice(2, 6));
console.log(fruit.replace("ban", "123"));

//Array
let fruits = ["banana", "apple", "orange", "pineapple"];
fruits = new Array("banana", "apple", "orange", "pineapples");
console.log(fruits[2]);

fruits[0] = "pear";
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//array common methods
console.log("to string ", fruits.toString());
console.log(fruits.join("*"));
console.log(fruits.pop(), fruits); //remove last item
console.log(fruits.push("blackberries"), fruits); //appends
console.log(fruits[4]);
fruits[fruits.length] = "new fruit"; //same as push
console.log(fruits);
fruits.shift(); //remove first element from an array
console.log(fruits);
fruits.unshift("kiwi"); //add first element to an array
console.log(fruits);

let vegetables = ["asparagus", "tomato", "broclee"];
let allGloceries = fruits.concat(vegetables); //combine array
console.log(allGloceries);
console.log(allGloceries.slice(1, 4));
console.log(allGloceries.reverse());
console.log(allGloceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 335, 2];
console.log(
  someNumbers.sort(function (a, b) {
    return a - b;
  })
); //sorted in acending order
console.log(
  someNumbers.sort(function (a, b) {
    return b - a;
  })
); //sorted in decending order

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
  emptyArray.push(num);
}
console.log(emptyArray);

//Object in javascrits
//dictionaries in python
let student = {
  first: "Irusha",
  last: "Basukala",
  age: 21,
  height: 170,
  // studentInfo: function(){
  //     return this.first + '\n' + this.last + '\n' + this.age;
  // }
};

console.log(student.first);
console.log(student.last);
console.first = "not irusha"; //change value
console.log(student.first);

student.age++;
console.log(student.age);

// console.log(student.studentInfo());

//conditional controlflows (ifelse)
//18-35 is my target demographic
//&& AND

//||OR
var age = prompt("what is your age");

if (age >= 18 && age <= 35) {
  status = "target demo";
  console.log(status);
} else {
  status = "not my audience ";
  console.log(status);
}

//switch statement

//difference wbtween weekday and  vs weekend
//sunday
//day 0 -->sunday
//day 1 ==>monday
//day 2 -->tuesday
//day 3 -->wednesay
//day 4 -->thrusday
//day 6 -->saturday
//day 4--> Thurday --> wednesday

switch (5) {
  case 0:
    text = "weekend";
    break;
  case 5:
    text = "weekend ";
    break;
  case 6:
    text = "weekend ";
    break;
  default:
    text = "weekday";
}
console.log(text);
