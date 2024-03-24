import * as promptsync from 'prompt-sync';
const prompt = promptsync();

const randomNumber = Math.floor(Math.random() * 100);
let attempts = 0;

console.log("Welcome to the Number Guessing Game!");

while (true) {
  const guess = parseInt(prompt("Enter your guess (1-100): "));

  if (guess === randomNumber) {
    attempts++;
    console.log(`Congratulations! You guessed the number in ${attempts} attempt(s).`);
    break;
  } else {
    console.log("Wrong guess. Try again.");
    attempts++;
  }
}

