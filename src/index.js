import readlineSync from 'readline-sync';

const engine = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  const { description } = game();
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const { question, result } = game();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== result) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}' 
Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default engine;
