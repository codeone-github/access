// let & const

console.log("LET & CONST");
let variable = "Test";
console.log(variable);
// ✅null 

variable = "Another value";
console.log(variable);

const maxMarks = 100;
console.log(maxMarks);
// maxMarks = 99; // Won't work

// Block scope
function reset() {
    // console.log(variable);
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// Arrow Functions
console.log("ARROW FUNCTIONS");
const addNumbers = function (number1,number2){
    return number1 + number2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1,number2) => number1 * number2;
console.log(multiplyNumbers(10, 3));

const greet = () => {
    console.log("Hello!");
};
greet();

const greetFriend = friend => console.log(friend);
greetFriend("Taj");

// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start = 10) => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();

// Rest & Spread
console.log("REST & SPREAD");
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));

function makeArray(name, ...args) {
    return args;
}
console.log(makeArray("Salman", 1, 2, 6));