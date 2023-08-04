// num1 has global scope
const num1 = 20;
const name = "Viha";
// Block scope -> let and const variable can only be accessed inside the block they are declared in.
if (true) {
  const name = "Jayti";
  console.log("Name is", name);
  console.log("Number is :", num1);
}
// console.log(name); -> Uncaught ref error : name is not defined.

// Function scope -> let and const variable  can only be accessed inside the function they are declared in.
function getName() {
  const name = "Aditi";
  console.log("Name is", name);
  console.log("Number is :", num1);
}
// console.log(name); -> Uncaught ref error : name is not defined.
getName();

// Global scope -> variables that can be accessed anywhere inside the code, present in global memory space.
let num = 7;
console.log("Number is :", num);
console.log("Name is", name);
