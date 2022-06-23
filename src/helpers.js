export const randomNum = (num = 10) => Math.round(Math.random() * num);
export const collectDataGame = (result, question) => {
  const dataGame = {};
  dataGame.result = result.toString();
  dataGame.question = question;
  return dataGame;
};
