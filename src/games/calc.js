import readlineSync from 'readline-sync';
import {
  playerGreeting, timesCount, name, winGame,
} from '../index.js';
import { generateRandomNumber } from '../utils.js';

const operators = ['+', '-', '*'];
let isSuccessful = true;

const generateRound = () => {
  const randomNumber1 = generateRandomNumber(1, 100);
  const randomNumber2 = generateRandomNumber(1, 100);
  const randomOperator = operators[Math.floor(Math.random() * 3)];
  const question = `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`;
  let correctAnswer;
  if (randomOperator === '+') {
    correctAnswer = randomNumber1 + randomNumber2;
  } else if (randomOperator === '-') {
    correctAnswer = randomNumber1 - randomNumber2;
  } else {
    correctAnswer = randomNumber1 * randomNumber2;
  }
  return [question, correctAnswer];
};

const runCalc = () => {
  playerGreeting();
  console.log('What is the result of the expression?');
  for (let i = 0; i < timesCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(question);
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

export { runCalc };
