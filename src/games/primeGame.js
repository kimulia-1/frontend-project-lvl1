export const primeGame = () => {
  let result = 'yes';
  const num = Math.floor(Math.random() * 10) + 1;
  console.log(`Question: ${num}`);
  if (num === 1) {
    result = 'no';
  }
  for (let div = 2; div < num; div += 1) {
    if (num % div === 0) {
      result = 'no';
      break;
    }
  }
  return result;
};

export const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
