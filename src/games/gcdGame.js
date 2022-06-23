import { collectDataGame, randomNum } from '../helpers.js';

export const description = 'Find the greatest common divisor of given numbers.';

export const gcdGame = () => {
  const randomNum1 = randomNum();
  const randomNum2 = randomNum();
  const question = `Question: ${randomNum1} ${randomNum2}`;

  const gcd = (num1, num2) => {
    if (!num2) {
      return num1;
    }
    return gcd(num2, num1 % num2);
  };
  const result = gcd(randomNum1, randomNum2);
  return collectDataGame(result, question);
};
