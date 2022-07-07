import getRandomNumber from '../helpers.js';
import engine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let div = 2; div < num; div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};
const getAdaptedAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const generateRound = () => {
  const randomNum1 = getRandomNumber();
  const question = `${randomNum1}`;

  const answer = getAdaptedAnswer(randomNum1);
  return { answer, question, description };
};

const runPrimeGame = () => engine(generateRound);

export default runPrimeGame;
