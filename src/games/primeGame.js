import randomNum from '../helpers.js';
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
const getResult = (num) => (isPrime(num) ? 'yes' : 'no');

const game = () => {
  const randomNum1 = randomNum();
  const question = `${randomNum1}`;

  const result = getResult(randomNum1);
  return { result, question, description };
};

const primeGame = () => engine(game);

export default primeGame;
