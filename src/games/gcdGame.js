import { creatorDataGame, randomNum } from '../helpers.js';

const gcdGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const randomNum1 = randomNum();
  const randomNum2 = randomNum();
  const query = `Question: ${randomNum1} ${randomNum2}`;

  const gcd = (num1, num2) => {
    if (!num2) {
      return num1;
    }
    return gcd(num2, num1 % num2);
  };
  const result = gcd(randomNum1, randomNum2);
  const dataGame = creatorDataGame(result, query, rule);
  return dataGame;
};

export default gcdGame;
