export const calcGame = () => {
  const operatorСhoice = () => {
    const signs = ['+', '-', '*'];
    const index = Math.floor(Math.random() * signs.length);
    return signs[index];
  };
  const operator = operatorСhoice();
  let result = '';
  const randomNumber1 = Math.round(Math.random() * 10);
  const randomNumber2 = Math.round(Math.random() * 10);
  console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2} `);
  if (operator === '+') {
    result = randomNumber1 + randomNumber2;
  }
  if (operator === '-') {
    result = randomNumber1 - randomNumber2;
  }
  if (operator === '*') {
    result = randomNumber1 * randomNumber2;
  }
  return result.toString();
};

export const ruleGame = 'What is the result of the expression?';
