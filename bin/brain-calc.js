#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}`);
console.log('What is the result of the expression?');

const calcGame = () => {
  let i = 0;
  while (i < 3) {
    const operatorСhoice = () => {
      const signs = ['+', '-', '*'];
      const index = Math.floor(Math.random() * signs.length);
      return signs[index];
    };
    const operator = operatorСhoice();
    let result = '';
    const randomNumber1 = Math.round(Math.random() * 100);
    const randomNumber2 = Math.round(Math.random() * 100);
    console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2} `);
    if (operator === '+') {
      result = randomNumber1 + randomNumber2;
    }
    if (operator === '-') {
      result = randomNumber1 - randomNumber2;
    }
    if (operator === '*') {
      result = randomNumber1 * randomNumber2;
    }

    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(result) === Number(userAnswer)) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
calcGame();
