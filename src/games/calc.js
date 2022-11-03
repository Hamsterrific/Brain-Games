import { run } from '../index.js';
import { generateRandomNumber, generateRandomIndex } from '../utils.js';

const operators = ['+', '-', '*'];
const gameTask = 'What is the result of the expression?';

const generateRound = () => {
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const operator = generateRandomIndex(operators);
  const question = `Question: ${number1} ${operator} ${number2}`;
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      correctAnswer = null;
  }
  correctAnswer = correctAnswer.toString();
  return [question, correctAnswer];
};

const runCalc = () => {
  run(gameTask, generateRound);
};

export default runCalc;
