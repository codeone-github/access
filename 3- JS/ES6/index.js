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
