let userName = "John";

// Greet the user based on the username
if (userName) {
  console.log(`Hello, ${userName}!`);
} else {
  console.log("Hello");
}

const userQuestion = "Choose a Nr.";
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = " ";

// Use if...else if...else for the magic eight ball responses
if (randomNumber === 1) {
  console.log('It is certain');
} else if (randomNumber === 2) {
  console.log('It is decidedly so');
} else if (randomNumber === 3) {
  console.log('Reply hazy try again');
} else if (randomNumber === 4) {
  console.log('Cannot predict now');
} else if (randomNumber === 5) {
  console.log('Do not count on it');
} else if (randomNumber === 6) {
  console.log('My sources say no');
} else if (randomNumber === 7) {
  console.log('Outlook not so good');
} else {
  console.log('Signs point to yes');
}
