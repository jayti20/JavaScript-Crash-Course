const num = 5;
//if -> self explanatory
//if-else
if (num > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative");
}

// if-else if-else
if (num > 0) {
  console.log("Number is positive");
} else if (num == 0) {
  console.log("Number is zero");
} else {
  console.log("Number is negative");
}

// switch
const color = "blue";

switch (color) {
  case "blue":
    console.log("Color is Blue");
    break;
  case "red":
    console.log("Color is Red");
    break;
  case "green":
    console.log("Color is Green");
    break;
  default:
    console.log("Invalid value!");
}
