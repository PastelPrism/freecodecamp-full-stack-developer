// Declare a function that takes two parameters and returns their sum
function calculateSum(num1, num2) {
  return num1 + num2;
}

// Test the function with different inputs
console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

// Declare a function that takes two parameters and returns their difference
function calculateDifference(num1, num2) {
  return num1 - num2;
}

// Test the function with different inputs
console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

// Declare a function that takes two parameters and returns their product
function calculateProduct(num1, num2) {
  return num1 * num2;
}

// Test the function 
console.log(calculateProduct(13, 5));

// Declare a function that takes two parameters and returns their quotient
function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

// Test the function with different inputs
console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

// Declare a function that takes one parameter and returns its square
function calculateSquare(num) {
  return num ** 2;
}

// Test the function with different inputs
console.log(calculateSquare(2));
console.log(calculateSquare(9));

// Declare a function that takes one parameter and returns its square root
function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

// Test the function with different inputs
console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));