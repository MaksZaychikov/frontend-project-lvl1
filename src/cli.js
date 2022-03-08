import readLineSync from 'readline-sync';

const userName = () => {
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};


const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// eslint-disable-next-line no-unused-vars
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
// eslint-disable-next-line no-unused-vars
const gameCheck = () => {
  const question = getRandomNum(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const roundCount = 3;

// eslint-disable-next-line no-shadow
const runGame = (gameDescription, getGameCheck) => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  for (let i = 1; i <= roundCount; i += 1); {
    const [question, correctAnswer] = getGameCheck();
    console.log(`Question: ${question}`);
    const userAnswer = readLineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct');
    // eslint-disable-next-line no-lone-blocks
    } else {
      console.log(`${userAnswer} is wrong answer;(. Correct answer was ${correctAnswer}. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
const startGame = () => runGame(gameDescription, gameCheck);
export default startGame;