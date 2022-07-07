import readlineSync from 'readline-sync';

const numOfRounds = 3;

const engine = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  const { description } = game();
  console.log(description);

  for (let i = 0; i < numOfRounds; i += 1) {
    const { question, answer } = game();
    console.log(`Question: ${question} `);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}' 
Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default engine;
