import readlineSync from 'readline-sync';
import {
  name, playerGreeting, timesCount, winGame,
} from '../src/index.js';

let isSuccessful = true;
const gcdGame = () => {
  playerGreeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < timesCount; i += 1) {
    const gcd = (a, b) => {
      let r;
      while (b !== 0) {
        r = a % b;
        a = b;
        b = r;
      }
      return a;
    };
    const randomNumber1 = Math.floor(Math.random() * 101);
    const randomNumber2 = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const answer = +readlineSync.question('Your answer: ');
    const correctAnswer = gcd(randomNumber1, randomNumber2);
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

export { gcdGame };
