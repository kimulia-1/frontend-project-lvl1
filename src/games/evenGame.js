import randomNum from '../helpers.js';
import engine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const game = () => {
  const randomNum1 = randomNum(1, 100);
  const question = `Question: ${randomNum1}`;

  const result = getEven(randomNum1);
  return { result, question, description };
};

const evenGame = () => engine(game);

export default evenGame;
