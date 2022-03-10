import runGame from '../index.js';
import getRandomNum from '../getRandom.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (a === 0) {
    return b;
  }
  while (b !== 0) {
    if (a > b) {
      // eslint-disable-next-line no-param-reassign
      a -= b;
    } else {
      // eslint-disable-next-line no-param-reassign
      b -= a;
    }
  }
  return a;
};

const gameData = () => {
  const number1 = getRandomNum(1, 50);
  const number2 = getRandomNum(1, 50);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, gameData);

export default startGame;
