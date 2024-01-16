// Number guessing game
// generate a random number between 1 and 100 inclusively
const minNum = 1;
const maxNum = 10;
// Math.random will generate number between 0 and 1
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(answer);

let attempts = 0;
let guess;
//boolean variable running 

let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)) {
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number");
    }
    else {
        attempts++;
        if(guess < answer) {
            window.alert("Too low! Try again!");

        }
        else if(guess > answer) {
            window.alert("Too High! Try again!");

        }
        else {
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}