import readLineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const roundsCount = 3;
const gameData = () => {
  const question = getRandomNum(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runGame = (gameDescr, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescr);
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readLineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const startGame = () => runGame(gameDescription, gameData);

export default startGame;
