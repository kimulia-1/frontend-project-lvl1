import { collectDataGame, randomNum } from '../helpers.js';

export const description = 'What is the result of the expression?';

export const calcGame = () => {
  let result = '';
  const signs = ['+', '-', '*'];
  const operator = signs[randomNum(signs.length - 1)];
  const randomNumber1 = randomNum();
  const randomNumber2 = randomNum();
  const question = `Question: ${randomNumber1} ${operator} ${randomNumber2} `;
  if (operator === '+') {
    result = randomNumber1 + randomNumber2;
  }
  if (operator === '-') {
    result = randomNumber1 - randomNumber2;
  }
  if (operator === '*') {
    result = randomNumber1 * randomNumber2;
  }
  return collectDataGame(result, question);
};
