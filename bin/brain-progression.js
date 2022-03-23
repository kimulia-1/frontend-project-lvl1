#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}`);

const game = () => {
  console.log('What number is missing in the progression?');

  let i = 0;
  while (i < 3) {
    const firstNum = Math.floor(Math.random() * 10) + 1;
    const randomSubsequence = Math.floor(Math.random() * 10) + 1;
    const array = [];
    array.push(firstNum);
    for (let index = 0; index < 10; index += 1) {
      const numbers = array[index] + randomSubsequence;
      array.push(numbers);
    }
    const secretIndex = Math.floor(Math.random() * 10) + 1;
    const result = array[secretIndex];
    array[secretIndex] = '..';
    console.log(`Question: ${array.join(' ')}`);
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
game();
