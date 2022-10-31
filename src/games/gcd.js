import readlineSync from 'readline-sync';
import {
  name, playerGreeting, timesCount, winGame,
} from '../index.js';
import { generateRandomNumber } from '../utils.js';

let isSuccessful = true;

const gcd = (a, b) => {
  let r;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const generateRound = () => {
  const randomNumber1 = generateRandomNumber(1, 100);
  const randomNumber2 = generateRandomNumber(1, 100);
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  const correctAnswer = gcd(randomNumber1, randomNumber2);
  return [question, correctAnswer];
};

const runGCD = () => {
  playerGreeting();
  console.log('Find the greatest common divisor of given numbers.');
  const [question, correctAnswer] = generateRound();
  console.log(question);
  for (let i = 0; i < timesCount; i += 1) {
    console.log(generateRound());
    const answer = +readlineSync.question('Your answer: ');
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

export { runGCD };
