function greet(name = "") {
  console.log("Good morning,", name, "!");
}
greet("Jayti");
greet();

function add(a, b) {
  return a + b;
}
const sum = add(5, 10);
console.log("Sum is ", sum);

// Arrow functions
const sum_func = (a, b) => a + b;
const sum1 = sum_func(125, 10);
console.log("Sum is", sum1);

const addFive = (num) => num + 5; //can omit paranthesis of parameter num
console.log("Sum is", addFive(19));
