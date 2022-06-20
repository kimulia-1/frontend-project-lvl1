import { creatorDataGame, randomNum } from '../helpers.js';

const calcGame = () => {
  const rule = 'What is the result of the expression?';
  let result = '';
  const signs = ['+', '-', '*'];
  const operator = signs[randomNum(signs.length - 1)];
  const randomNumber1 = randomNum();
  const randomNumber2 = randomNum();
  const query = `Question: ${randomNumber1} ${operator} ${randomNumber2} `;
  if (operator === '+') {
    result = randomNumber1 + randomNumber2;
  }
  if (operator === '-') {
    result = randomNumber1 - randomNumber2;
  }
  if (operator === '*') {
    result = randomNumber1 * randomNumber2;
  }
  const dataGame = creatorDataGame(result, query, rule);
  return dataGame;
};

export default calcGame;
