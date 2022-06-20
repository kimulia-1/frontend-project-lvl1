export const randomNum = (num = 10) => Math.round(Math.random() * num);
export const creatorDataGame = (result, query, rule) => {
  const dataGame = {};
  dataGame.result = result.toString();
  dataGame.query = query;
  dataGame.rule = rule;
  return dataGame;
};
