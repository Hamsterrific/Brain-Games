import readlineSync from 'readline-sync';
import {
  name, playerGreeting, timesCount, winGame,
} from '../index.js';
import { generateRandomNumber } from '../utils.js';

let isSuccessful = true;

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

const generateRound = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const question = `Question: ${randomNumber}`;
  let correctAnswer;
  if (checkPrime(randomNumber)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

const runPrime = () => {
  playerGreeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < timesCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is a wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      isSuccessful = false;
      return;
    }
  }
  if (isSuccessful) {
    winGame();
  }
};

export { runPrime };
