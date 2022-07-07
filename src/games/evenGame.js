import getRandomNumber from '../helpers.js';
import engine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);
const getAdaptedAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const generateRound = () => {
  const randomNum1 = getRandomNumber(1, 100);
  const question = `${randomNum1}`;

  const answer = getAdaptedAnswer(randomNum1);
  return { answer, question, description };
};

const runEvenGame = () => engine(generateRound);

export default runEvenGame;
