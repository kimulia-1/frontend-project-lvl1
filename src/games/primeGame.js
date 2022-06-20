import { creatorDataGame, randomNum } from '../helpers.js';

const primeGame = () => {
  const rule = 'Answer "yes" if given random number is prime. Otherwise answer "no".';
  let result = 'yes';
  const randomNum1 = randomNum();
  const query = `Question: ${randomNum1}`;
  if (randomNum1 === 1) {
    result = 'no';
  }
  for (let div = 2; div < randomNum1; div += 1) {
    if (randomNum1 % div === 0) {
      result = 'no';
      break;
    }
  }
  const dataGame = creatorDataGame(result, query, rule);
  return dataGame;
};

export default primeGame;
