import runGame from '../index.js';
import getRandomNum from '../getRandom.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  let firstNum = a;
  let secondNum = b;
  if (firstNum === 0) {
    return secondNum;
  }
  while (secondNum !== 0) {
    if (firstNum > secondNum) {
      firstNum -= secondNum;
    } else {
      secondNum -= firstNum;
    }
  }
  return firstNum;
};

const getData = () => {
  const number1 = getRandomNum(1, 50);
  const number2 = getRandomNum(1, 50);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, getData);

export default startGame;
