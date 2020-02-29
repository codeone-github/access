//1. Variable

var x; // declaring x
console.log(x); 
// output: undefined

/*
A variable can be neither declared nor defined. 
When we try to reference such variable then the result will be not defined.
*/

// console.log(y);  
// Output: ReferenceError: y is not defined

var  z = 1; // ✅

// 2.Better Boolean Variable Names

// Avoid Single Letter Names

var h; // 😱  huh, what's h??

// Avoid Acronyms
var cra; // I bet you have no idea.

// Avoid Abbreviations
var categ; // Sure we can deduce you're saying category here, but let's just used the full name, so it's not a guessing game 😜

// Avoid Meaningless Names
var foo; // what is foo? 🧐

//3.Primitive Data types

var name = "Salman";
typeof name; // string

var age = 24;
typeof age; //number

var isDeveloper = true;
typeof isDeveloper; //boolean

var address;
typeof address; //undefined

var savings = null;
typeof savings; //Object

var v = Symbol();
typeof v; //Symbol

/*
The way to convert from one
type to another: coercion
*/

var value1 = '5';
var value2 = 9;
var sum = value1 + value2;

console.log(sum); //Output: 59
/*
JavaScript has coerced the 9 from a number into a string 
and then concatenated the two values together,resulting in a string of 59.
*/


var msg1 = "There are ";
var numStudents = 25;
var msg2 = " students in class";

console.log(msg1 + numStudents +  msg2);
//Output:  "There are 25 students"

// Coercion: string concatenation (number to string)

// Number + Number = Number;
// Number + String = String;
// String + Number = String;
// String + String = String;

//4.Function

function smaple() {
    console.log("called sample function");
}

//Function Invocation or calling the function
smaple();
//Output: called sample function


function add(a,b) {
  var c = a + b;
  return c;
}

var res = add(5,4);
//value i.e 9 which is returned from add function are storing in a varibale res.
console.log(res);
//output: 9

//5.Hoisting

//Function Hoisting

calculatedAge(1990);

function calculatedAge(year) { 
    //Function has already been available before executing
	console.log(2016 - year);
}

//variable Hoisting

console.log('hmmm',ages);
var ages = 23;


//6.Scope

var teacher = "Salman";
function otherClass () {
    teacher = "Tajammul";
    topic = "JS"
    console.log("Welcome!",topic); 
}
otherClass();
//Welcome! JS

var myAge = 20;
function foo() {
	var myAge = 60;
	console.log("Inside",myAge);
}
foo();
console.log("Outside",myAge);


var name = 'John';

function first() {
	var a = 'Hello!';
    second();
    var x = a + name;
}

function second() {
    var b = 'Hi!';
    third();
    var y = b + name
}

function third() {
    var c = 'Hey!';
    var z = c + name
    console.log(z);
    
}

first();

// 7. IIFEs

(function () {
    var aName = "Barry";
    console.log(aName);
    
})();

// Array

var arrayList = ['🍫', '😋', '🍦', '😋'];
console.log(arrayList.length)
console.log(arrayList[1])