import readlineSync from 'readline-sync';
import { playerGreeting, timesCount, name, winGame } from '../src/index.js';

const operators = ['+', '-', '*'];
let isSuccessful = true;

const calcGame = () => {
  playerGreeting();
  for (let i = 0; i < timesCount; i += 1) {
    let correctAnswer;
    const randomNumber1 = Math.floor(Math.random() * 101);
    const randomNumber2 = Math.floor(Math.random() * 101);
    const randomOperator = operators[Math.floor(Math.random() * 3)];
    console.log('What is the result of the expression?');
    console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`);
    const answer = +readlineSync.question('Your answer: ');
    if (randomOperator === '+') {
      correctAnswer = randomNumber1 + randomNumber2;
    } else if (randomOperator === '-') {
      correctAnswer = randomNumber1 - randomNumber2;
    } else {
      correctAnswer = randomNumber1 * randomNumber2;
    }
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

export { calcGame };
