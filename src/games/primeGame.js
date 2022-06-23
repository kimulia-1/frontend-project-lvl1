import { collectDataGame, randomNum } from '../helpers.js';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const primeGame = () => {
  let result = 'yes';
  const randomNum1 = randomNum();
  const question = `Question: ${randomNum1}`;
  if (randomNum1 === 1) {
    result = 'no';
  }
  for (let div = 2; div < randomNum1; div += 1) {
    if (randomNum1 % div === 0) {
      result = 'no';
      break;
    }
  }
  return collectDataGame(result, question);
};
