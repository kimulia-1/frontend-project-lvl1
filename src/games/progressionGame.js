import { collectDataGame, randomNum } from '../helpers.js';

export const description = 'What number is missing in the progression?';

export const progressionGame = () => {
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
  const question = `Question: ${array.join(' ')}`;
  return collectDataGame(result, question);
};
