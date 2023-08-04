// Equality

// == -> allows coercion. is the equality operator and it converts the operands to the same type before making the comparison.
// === -> does not allow coercion.

const var1 = "test";
const var2 = "test";
console.log(var1 == var2);
console.log(var1 === var2);

const var3 = 10;
const var4 = "10";
console.log(var3 == var4); // coerces '10'->10.
console.log(var3 === var4);

const var5 = 0;
const var6 = "";
console.log(var5 == var6); //Number("")->0
console.log(var5 === var6);

const var7 = false;
const var8 = "";
console.log(var7 == var8); // it returns true because they are both falsy values and considered loosely equal.
console.log(var7 === var8);
