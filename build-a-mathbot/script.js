// Create variable for botName
const botName = "MathBot";

// Create greeting message
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

// Log greeting message to the console
console.log(greeting);

// Log message to the console about Math.random()
console.log("The Math.random() method returns a pseudo random number between 0 and less than 1.");

// Generate a random number and log it to the console
const randomNum = Math.random();
console.log(randomNum);

// Log message to the console and create variables min and max
console.log("Now, generate a random number between two values.");
const min = 1;
const max = 100;

// Generate a random number between min and max
const randomNumBetween = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumBetween);

// Generate a random number between min and max and log it to the console
const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

// Log message to the console about Math.floor()
console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

// Create variable numRoundedDown and round down a number
const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

// Log message to the console about Math.ceil()
console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

// Create variable numRoundedUp and round up the number 3.2
const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

// Log message to the console about Math.round()
console.log("The Math.round() method rounds the value to the nearest whole integer.");

// Create variable numRounded and round the number 2.7, log message to the console.
const numRounded = Math.round(2.7);
console.log(numRounded);

// Create variable numRounded2 and round the number 11.2, log this message also to the console.
const numRounded2 = Math.round(11.2);
console.log(numRounded2);

// Log message to the console about Math.max() and Math.min()
console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");

// Create variable maxNum and use Math.max() to get the maximum number. 
const maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);

// Create variable minNum and use Math.min() to get the minimum number.
const minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);

// Log goodbye message to the console.
console.log("It was fun learning about the different Math methods with you!");