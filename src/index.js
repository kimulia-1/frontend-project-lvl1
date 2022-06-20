import readlineSync from 'readline-sync';

const engine = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  const { rule } = game();
  console.log(rule);

  let a = '';
  for (let i = 0; i < 3; i += 1) {
    const { query, result } = game();
    console.log(query);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === result) {
      console.log('Correct!');
    }
    if (userAnswer !== result) {
      a = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}' 
Let's try again, ${userName}!`);
      return a;
    }
    if (i === 2) {
      a = console.log(`Congratulations, ${userName}!`);
    }
  }
  return a;
};

export default engine;
