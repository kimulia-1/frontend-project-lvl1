#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenGame = () => {
  let i = 0;
  while (i < 3) {
    const randomNumber = Math.round(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    let isEven = '';
    if (randomNumber % 2 === 0) {
      isEven = 'yes';
    }
    if (randomNumber % 2 !== 0) {
      isEven = 'no';
    }
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === isEven) {
      i += 1;
      console.log('Correct!');
    }
    if (userAnswer !== isEven) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven}'`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
evenGame();
