import readlineSync from 'readline-sync';
import {
  name, playerGreeting, timesCount, winGame,
} from '../src/index.js';

let isSuccessful = true;
const primeGame = () => {
  playerGreeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const checkPrime = (number) => {
    if (number === 0 || number === 1) {
      return false;
    }
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < timesCount; i += 1) {
    const randomPrimeNumber = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomPrimeNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const checkResult = checkPrime(randomPrimeNumber);
    const correctAnswer = checkResult ? 'yes' : 'no';
    if ((checkResult && answer === 'yes') || (!checkResult && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is a wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      isSuccessful = false;
      break;
    }
  }
  if (isSuccessful) {
    winGame();
  }
};

export { primeGame };