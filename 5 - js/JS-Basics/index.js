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

var z = 1; // ✅

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

var value1 = "5";
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

console.log(msg1 + numStudents + msg2);
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

function add(a, b) {
  var c = a + b;
  return c;
}

var res = add(5, 4);
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

console.log("hmmm", ages);
var ages = 23;

//6.Scope

var teacher = "Salman";
function otherClass() {
  teacher = "Tajammul";
  topic = "JS";
  console.log("Welcome!", topic);
}
otherClass();
//Welcome! JS

var myAge = 20;
function foo() {
  var myAge = 60;
  console.log("Inside", myAge);
}
foo();
console.log("Outside", myAge);

var name = "John";

function first() {
  var a = "Hello!";
  second();
  var x = a + name;
}

function second() {
  var b = "Hi!";
  third();
  var y = b + name;
}

function third() {
  var c = "Hey!";
  var z = c + name;
  console.log(z);
}

first();

// 7. IIFEs

(function() {
  var aName = "Barry";
  console.log(aName);
})();

// Array

var arrayList = ["🍫", "😋", "🍦", "😋"];
console.log(arrayList.length);
console.log(arrayList[1]);

//Array built in functions

arrayList.push("🍎");
//Insert new element at the end of an array
console.log(arrayList);

arrayList.pop();
//Removes last element from the index

arrayList.shift();
//Removes first element of the array

arrayList.unshift();
//Insert new element at start of an array

arrayList.reverse();
//Reverses elements in the array

//Function Expression

function sub(a, b) {
  return a - b;
}

var result = sub(9, 10);

//Above same function can be written like this, it's called function expression

var sub = function(a, b) {
  return a - b;
};

sub(5, 6);

console.log(sub);

//Objects

var person = {
  name: "Salman",
  age: 24,
  address: {
    Town: "Hiriyur",
    city: "Chitradurgha",
    state: "karnataka",
    pincode: 577511
  }
};

//Accessing the Objects Properties using . notation and []

console.log(person.name);
//Alias
console.log(person["name"]);

console.log(person.address.Town);
//Alias
console.log(person["address"]["Town"]);

//Adding new values to Object
person.contactNumber = 9535386618;
console.log(person);

// JSON - Array of Objects

var access = {
  tutors: [
    {
      name: "Taj",
      age: 24,
      address: {
        Town: "Chennapatna",
        city: "Ramanagaram",
        state: "karnataka",
        pincode: 562159
      }
    },
    {
      name: "Salman",
      age: 24,
      address: {
        Town: "Hiriyur",
        city: "Chitradurgha",
        state: "karnataka",
        pincode: 577511
      }
    }
  ]
};

console.log(access.tutors);

//Operator Precedence

var isValue = 3 < 2 < 1;
//According to us we should get false, but it returns true becuase of Associativity of operators L - R.
// First it will check 3 < 2 and returns false, then false will be types casted to number(false -> 0).
// 0 < 1 returns true
console.log(isValue);

//To Know more about the operators visit MDN documentaion

//This

// When we run JS file global execution context will be created,
// along with execution context `this` and `Window`  object will be created. here `this`===`window`.

//Scenario One
function demo() {
  console.log(this);
  //this here refers to window(global) object
}

//Scenario Two
var video = {
  title: "JS",
  play: function() {
    console.log(this);
    //Here `this` refers to scope of the Object, that's why it's easy to access title like this as below
    console.log(this.title);
  }
};

//1.this in function refers to window Object
//2. Function within object is called `Method` and `this` keyword within Method refers to scope of the Object

//String Functions

var college = "Ghousia";
console.log(college.length);
console.log(college.charAt(0));
//You can access any charatcter by passing index value to `charAt` function

//Note: Explore on split and join functions

//Reversing the string

var branch = "computerscience";
var reverseBranch = "";

for (i = 0; i < branch.length; i++) {
  reverseBranch = branch.charAt(i) + reverseBranch;
  console.log(reverseBranch);
}
