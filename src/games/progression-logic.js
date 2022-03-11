import runGame from '../index.js';
import getRandomNum from '../getRandom.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step);
  }
  return result;
};

const gameData = () => {
  const start = getRandomNum(0, 20);
  const step = getRandomNum(1, 5);
  const length = getRandomNum(7, 13);
  const progression = getProgression(start, step, length);
  const hidenNumber = getRandomNum(0, progression.length - 1);
  const correctNumber = `${progression[hidenNumber]}`;
  progression[hidenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctNumber];
};

const startGame = () => runGame(gameDescription, gameData);
export default startGame;
