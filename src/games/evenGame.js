import randomNum from '../helpers.js';
import engine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);
const getResult = (num) => (isEven(num) ? 'yes' : 'no');

const game = () => {
  const randomNum1 = randomNum(1, 100);
  const question = `${randomNum1}`;

  const result = getResult(randomNum1);
  return { result, question, description };
};

const evenGame = () => engine(game);

export default evenGame;
