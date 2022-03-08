import readLineSync from 'readline-sync';

const userName = () => {
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
export default userName;
