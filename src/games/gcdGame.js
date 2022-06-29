import randomNum from '../helpers.js';
import engine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const game = () => {
  const randomNum1 = randomNum();
  const randomNum2 = randomNum();
  const question = `Question: ${randomNum1} ${randomNum2}`;

  const result = getGcd(randomNum1, randomNum2).toString();
  return { result, question, description };
};

const gcdGame = () => engine(game);

export default gcdGame;
