// Implicit Conversion -> JS automatically converts one data type into another.

console.log(5 + "1"); // -> 5 converted to string
console.log("5" + "true"); // ->true converted to string
console.log("4" - 20); // -> 4 converted to number
console.log("a" - "b"); // NaN
console.log(5 + true); //->true converted to number
console.log("5" - true); // 4
console.log(5 - false); // 5
console.log("5" - false); // 5
console.log(5 + null); //5
console.log("5" - null); //5
console.log(5 + NaN); //NaN
// undefined with no, boolean and string gives NaN
console.log(5 + undefined); // NaN
console.log("4" - undefined); // NaN
console.log(null * undefined); // NaN

// Explicit Conversion
// Number does not woek on undefined or words
console.log(Number("500")); //500
console.log(Number(true)); //1
console.log(Number("3.15")); //3.15
console.log(Number("")); //0
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0
// parseInt() and parseFloat() does not work on "",null,undefined or words.
console.log(parseInt("")); // NaN
console.log(parseFloat("")); // NaN
console.log(parseInt(null)); // NaN
console.log(parseInt(undefined)); //NaN
let ans = parseFloat("3.14");
let type = typeof ans;
console.log(type); // Number

console.log(String("100")); //"100"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
// toString() does not work on null or undefined
console.log((600).toString()); // "600"

console.log(Boolean(10)); //true
console.log(Boolean("   ")); //true -> whitespace is a value
// Except null, 0, undefined, "", NaN -> everything converted to boolean results to true
console.log(Boolean(null)); //false
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean("")); //false
