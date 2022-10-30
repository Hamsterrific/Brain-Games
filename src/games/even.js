import readlineSync from 'readline-sync';
import {
  name, playerGreeting, timesCount, winGame,
} from '../index.js';

let correctAnswer;
let isSuccessful = true;

const generateRound = () => {
  const randomNumber = Math.floor(Math.random() * 101);
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return `Question: ${randomNumber}`;
};

const runEven = () => {
  playerGreeting();
  console.log();
  for (let i = 0; i < timesCount; i += 1) {
    console.log(generateRound());
    const answer = readlineSync.question('Your answer: ');
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

export { runEven };
