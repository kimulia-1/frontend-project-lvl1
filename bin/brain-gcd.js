#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}`);

const gcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;

  while (i < 3) {
    const randomNumber1 = Math.round(Math.random() * 10);
    const randomNumber2 = Math.round(Math.random() * 10);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const gcd = (num1, num2) => {
      if (!num2) {
        return num1;
      }
      return gcd(num2, num1 % num2);
    };
    const result = gcd(randomNumber1, randomNumber2);

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
gcdGame();
