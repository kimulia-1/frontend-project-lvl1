import readlineSync from 'readline-sync';

const engine = (game, ruleGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(ruleGame);

  let i = 0;
  let a = '';
  while (i < 3) {
    const result = game();
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === result) {
      i += 1;
      console.log('Correct!');
    }
    if (userAnswer !== result) {
      a = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}' 
Let's try again, ${userName}!`);
      return a;
    }
    if (i === 3) {
      a = console.log(`Congratulations, ${userName}!`);
    }
  }
  return a;
};

export default engine;
