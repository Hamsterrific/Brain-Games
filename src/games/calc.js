import readlineSync from 'readline-sync';
import {
  playerGreeting, timesCount, name, winGame,
} from '../index.js';

const operators = ['+', '-', '*'];
let correctAnswer;
let isSuccessful = true;

const generateRound = () => {
  const randomNumber1 = Math.floor(Math.random() * 101);
  const randomNumber2 = Math.floor(Math.random() * 101);
  const randomOperator = operators[Math.floor(Math.random() * 3)];
  if (randomOperator === '+') {
    correctAnswer = randomNumber1 + randomNumber2;
  } else if (randomOperator === '-') {
    correctAnswer = randomNumber1 - randomNumber2;
  } else {
    correctAnswer = randomNumber1 * randomNumber2;
  }
  return `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`;
};

const runCalc = () => {
  playerGreeting();
  console.log('What is the result of the expression?');
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

export { runCalc };
