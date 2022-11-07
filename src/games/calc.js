import run from '../index.js';
import { generateRandomNumber, generateRandomIndex } from '../utils.js';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getCorrectAnswer = (operator, number1, number2) => {
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
      throw new Error(`Unknown order state: '${operator}'!`);
  }
  return correctAnswer;
};

const generateRound = () => {
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const operator = generateRandomIndex(operators);
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = getCorrectAnswer(operator, number1, number2).toString();
  return [question, correctAnswer];
};

const runCalc = () => {
  run(description, generateRound);
};

export default runCalc;
