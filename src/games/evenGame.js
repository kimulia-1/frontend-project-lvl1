import { randomNum, collectDataGame } from '../helpers.js';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const evenGame = () => {
  let result = '';
  const randomNum1 = randomNum(100);
  const question = `Question: ${randomNum1}`;
  if (randomNum1 % 2 === 0) {
    result = 'yes';
  }
  if (randomNum1 % 2 !== 0) {
    result = 'no';
  }
  return collectDataGame(result, question);
};
