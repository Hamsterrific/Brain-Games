import readlineSync from 'readline-sync';
import {
  name, playerGreeting, timesCount, winGame,
} from '../index.js';
import { generateRandomNumber } from '../utils.js';

let isSuccessful = true;

const generateRound = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const question = `Question: ${randomNumber}`;
  let correctAnswer;
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

const runEven = () => {
  playerGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
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

export { runEven };
