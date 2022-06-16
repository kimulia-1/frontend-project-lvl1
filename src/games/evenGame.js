export const evenGame = () => {
  const randomNumber = Math.round(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);
  let result = '';
  if (randomNumber % 2 === 0) {
    result = 'yes';
  }
  if (randomNumber % 2 !== 0) {
    result = 'no';
  }
  return result;
};

export const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';
