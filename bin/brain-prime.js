#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}`);

const game = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const num = Math.floor(Math.random() * 10) + 1;
    console.log(`Question: ${num}`);
    let result = 'yes';
    for (let div = 2; div < num; div += 1) {
      if (num % div === 0) {
        result = 'no';
        break;
      }
    }

    const userAnswer = readlineSync.question('Your answer: ');
    if (String(result) === String(userAnswer)) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
game();
