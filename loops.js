// For-loop
for (let i = 1; i <= 5; i++) {
  console.log("Iteration number ", i);
}

// while-loop
let j = 1;
while (j <= 5) {
  console.log("Iteration number ", j++);
}

// do-while loop
let k = 1;
do {
  console.log("Iteration number ", k++);
} while (k <= 5);

// For..of loop -> Best for collection of data, mainly array
const num_arr = [1, 2, 3, 4, 5, 6];
for (const num of num_arr) {
  if (num % 2 == 0) console.log("Number is ", num);
}
