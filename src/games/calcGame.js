import randomNum from '../helpers.js';
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

const game = () => {
  const operator = signs[Math.floor(Math.random() * signs.length)];
  const randomNumber1 = randomNum();
  const randomNumber2 = randomNum();

  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  const result = getCalc(randomNumber1, randomNumber2, operator);

  return { result, question, description };
};

const calcGame = () => engine(game);

export default calcGame;
