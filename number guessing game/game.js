"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptsync = require("prompt-sync");
var prompt = promptsync();
var randomNumber = Math.floor(Math.random() * 100);
var attempts = 0;
console.log("Welcome to the Number Guessing Game!");
while (true) {
    var guess = parseInt(prompt("Enter your guess (1-100): "));
    if (guess === randomNumber) {
        attempts++;
        console.log("Congratulations! You guessed the number in ".concat(attempts, " attempt(s)."));
        break;
    }
    else {
        console.log("Wrong guess. Try again.");
        attempts++;
    }
}
