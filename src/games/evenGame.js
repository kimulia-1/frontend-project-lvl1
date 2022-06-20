import { randomNum, creatorDataGame } from '../helpers.js';

const evenGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  let result = '';
  const randomNum1 = randomNum(100);
  const query = `Question: ${randomNum1}`;
  if (randomNum1 % 2 === 0) {
    result = 'yes';
  }
  if (randomNum1 % 2 !== 0) {
    result = 'no';
  }
  const dataGame = creatorDataGame(result, query, rule);
  return dataGame;
};

export default evenGame;
