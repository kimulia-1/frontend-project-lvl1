import randomNum from '../helpers.js';
import engine from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (num1, num2) => {
  const array = [];
  array.push(num1);
  for (let index = 0; index < 10; index += 1) {
    const numbers = array[index] + num2;
    array.push(numbers);
  }
  return array;
};

const game = () => {
  const randomNum1 = randomNum();
  const randomNum2 = randomNum();

  const array = getProgression(randomNum1, randomNum2);
  const secretIndex = randomNum();
  const result = array[secretIndex].toString();
  array[secretIndex] = '..';
  const question = `${array.join(' ')}`;

  return { result, question, description };
};

const progressionGame = () => engine(game);

export default progressionGame;
