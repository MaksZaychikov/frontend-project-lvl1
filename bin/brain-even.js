#!/usr/bin/env node
import readLineSync from 'readline-sync';

const getRandomNum = (min, max) => {
    return Math.random() * (max - min) + min;
};
const question = getRandomNum(1, 100);
const isEven (num) => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};




const userName = () => {
    const name = readLineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i=1; i <= 3; i += 1) {
    console.log(`Question: ${question}`);
    const answer = readLineSync.question('Your answer: ');
    console.log(`${answer}`)
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    if (answer === correctAnswer) {
        console.log('Correct');
} else {
console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${name}`)
}

}
console.log('Congratulations, Bill!');
};
