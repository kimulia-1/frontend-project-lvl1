export const gcdGame = () => {
  const randomNumber1 = Math.round(Math.random() * 10);
  const randomNumber2 = Math.round(Math.random() * 10);
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);

  const gcd = (num1, num2) => {
    if (!num2) {
      return num1;
    }
    return gcd(num2, num1 % num2);
  };
  const result = gcd(randomNumber1, randomNumber2);
  return result.toString();
};

export const ruleGame = 'Find the greatest common divisor of given numbers.';
