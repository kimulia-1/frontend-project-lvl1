import getRandomNumber from '../helpers.js';
import engine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const generateRound = () => {
  const randomNum1 = getRandomNumber();
  const randomNum2 = getRandomNumber();
  const question = `${randomNum1} ${randomNum2}`;

  const answer = getGcd(randomNum1, randomNum2).toString();
  return { answer, question, description };
};

const runGcdGame = () => engine(generateRound);

export default runGcdGame;
