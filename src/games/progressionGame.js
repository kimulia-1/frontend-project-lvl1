import { creatorDataGame, randomNum } from '../helpers.js';

const progressionGame = () => {
  const rule = 'What number is missing in the progression?';
  const randomNum1 = randomNum();
  const randomNum2 = randomNum();
  const array = [];
  array.push(randomNum1);
  for (let index = 0; index < 10; index += 1) {
    const numbers = array[index] + randomNum2;
    array.push(numbers);
  }
  const secretIndex = randomNum();
  const result = array[secretIndex];
  array[secretIndex] = '..';
  const query = `Question: ${array.join(' ')}`;
  const dataGame = creatorDataGame(result, query, rule);
  return dataGame;
};

export default progressionGame;
