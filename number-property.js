let n = 36;

// Checking if even or odd
if (n % 2 === 0) {
  console.log(`${n} is even.`);
} else {
  console.log(`${n} is odd.`);
}

// Checking if Positive, Negative, or Zero
if (n > 0) {
  console.log(`${n} is positive.`);
} else if (n < 0) {
  console.log(`${n} is negative.`);
} else {
  console.log(`${n} is zero.`);
}

//Checking if divissible by 4
if (n % 4 === 0) {
  console.log(`${n} is divisible by 4.`);
} else {
  console.log(`${n} is not divisible by 4.`);
}

// Checking if a Perfect Square
let sqt = Math.sqrt(n);
if (sqt % 1 === 0) {
  console.log(`${n} is a perfect square (Square root is ${sqt}).`);
} else {
  console.log(`${n} is not a perfect square.`);
}