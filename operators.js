// Operators -> used to perform operations on values and variables.

// Assignment operator

let x = 10;

// Arithmetic operator

let y = 5;
console.log("sum is", x + y);
console.log("difference is", x - y);
console.log("product is", x * y);
console.log("quotient is", x / y);
console.log("remainder is", x % y);
console.log("Increment in x", ++x);
console.log("Decrement in y", --y);

// Comparison operator

console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);
console.log(x > y);
console.log(x >= y);
console.log(y < x);
console.log(y <= x);

// Logical operator -> &&, ||, !

const inRange = 8 > y && 8 < x;
console.log(inRange);
const isValidNumber = 10 < x || 10 > y;
console.log(isValidNumber);
const isValid = true;
console.log(!isValid);

// String operator

const f_name = "Jayti";
const l_name = "Srivastava";
const full_name = f_name + l_name;
console.log(full_name);

// Ternary Operator

const isEven = x % 2 ? "Number is even" : "Number is odd";
console.log(isEven);
