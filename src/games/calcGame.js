import getRandomNumber from '../helpers.js';
import engine from '../index.js';

const description = 'What is the result of the expression?';

const getCalc = (randomNumber1, randomNumber2, operator) => {
  let result = '';
  if (operator === '+') {
    result = randomNumber1 + randomNumber2;
  }
  if (operator === '-') {
    result = randomNumber1 - randomNumber2;
  }
  if (operator === '*') {
    result = randomNumber1 * randomNumber2;
  }
  return result.toString();
};

const signs = ['+', '-', '*'];

const generateRound = () => {
  const operator = signs[Math.floor(Math.random() * signs.length)];
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();

  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  const answer = getCalc(randomNumber1, randomNumber2, operator);

  return { answer, question, description };
};

const runCalcGame = () => engine(generateRound);

export default runCalcGame;
