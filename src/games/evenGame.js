import getRandomNumber from '../helpers.js';
import engine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const generateRound = () => {
  const randomNum1 = getRandomNumber(1, 100);
  const question = `${randomNum1}`;

  const answer = isEven(randomNum1) ? 'yes' : 'no';
  return { answer, question, description };
};

const runEvenGame = () => engine(generateRound);

export default runEvenGame;
