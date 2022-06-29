import randomNum from '../helpers.js';
import engine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getPrime = (num) => {
  let result = 'yes';
  if (num === 1) {
    result = 'no';
  }
  for (let div = 2; div < num; div += 1) {
    if (num % div === 0) {
      result = 'no';
      break;
    }
  }
  return result.toString();
};

const game = () => {
  const randomNum1 = randomNum();
  const question = `Question: ${randomNum1}`;

  const result = getPrime(randomNum1);
  return { result, question, description };
};

const primeGame = () => engine(game);

export default primeGame;
