export const progressionGame = () => {
  const firstNum = Math.floor(Math.random() * 10) + 1;
  const randomSubsequence = Math.floor(Math.random() * 10) + 1;
  const array = [];
  array.push(firstNum);
  for (let index = 0; index < 10; index += 1) {
    const numbers = array[index] + randomSubsequence;
    array.push(numbers);
  }
  const secretIndex = Math.floor(Math.random() * 10) + 1;
  const result = array[secretIndex];
  array[secretIndex] = '..';
  console.log(`Question: ${array.join(' ')}`);
  return result.toString();
};

export const ruleGame = 'What number is missing in the progression?';
