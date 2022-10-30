import readlineSync from 'readline-sync';
import {
  name, playerGreeting, timesCount, winGame,
} from '../index.js';

let correctAnswer;
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
  const randomNumber1 = Math.floor(Math.random() * 101);
  const randomNumber2 = Math.floor(Math.random() * 101);
  correctAnswer = gcd(randomNumber1, randomNumber2);
  return `Question: ${randomNumber1} ${randomNumber2}`;
};

const runGCD = () => {
  playerGreeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < timesCount; i += 1) {
    console.log(generateRound());
    const answer = +readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
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

export { runGCD };
