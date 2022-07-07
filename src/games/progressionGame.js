import getRandomNumber from '../helpers.js';
import engine from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (num1, num2) => {
  const progression = [];
  progression.push(num1);
  for (let index = 0; index < 10; index += 1) {
    const numbers = progression[index] + num2;
    progression.push(numbers);
  }
  return progression;
};

const generateRound = () => {
  const randomNum1 = getRandomNumber();
  const randomNum2 = getRandomNumber();

  const progression = getProgression(randomNum1, randomNum2);
  const secretIndex = getRandomNumber();
  const answer = progression[secretIndex].toString();
  progression[secretIndex] = '..';
  const question = `${progression.join(' ')}`;

  return { answer, question, description };
};

const runProgressionGame = () => engine(generateRound);

export default runProgressionGame;
