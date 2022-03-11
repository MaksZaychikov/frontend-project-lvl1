import runGame from '../index.js';
import getRandomNum from '../getRandom.js';

const gameDescription = 'What is the result of the expression?';

const calc = (first, second, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = first + second;
      break;
    case '-':
      result = first - second;
      break;
    case '*':
      result = first * second;
      break;
    default:
  }
  return result;
};

const gameData = () => {
  const number1 = getRandomNum(1, 50);
  const number2 = getRandomNum(1, 50);
  const operators = ['-', '+', '*'];
  const operator = operators[getRandomNum(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calc(number1, number2, operator).toString();
  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, gameData);

export default startGame;
