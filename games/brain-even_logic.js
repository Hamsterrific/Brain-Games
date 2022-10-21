import readlineSync from 'readline-sync';
import { name, playerGreeting, timesCount, winGame } from '../src/index.js';

let isSuccessful = true;

const evenGame = () => {
  playerGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < timesCount; i += 1) {
    let correctAnswer;
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      correctAnswer = (answer === 'yes' ? 'no' : 'yes');
      console.log(`${answer} is a wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      isSuccessful = false;
      break;
    }
  }
  if (isSuccessful) {
    winGame();
  }
};

export { evenGame };
