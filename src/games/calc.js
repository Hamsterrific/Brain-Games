import run from '../index.js';
import { generateNumber, generateIndex } from '../utils.js';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const calculate = (operator, x, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const generateRound = () => {
  const number1 = generateNumber(1, 100);
  const number2 = generateNumber(1, 100);
  const operator = operators[generateIndex(operators.length)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(operator, number1, number2));
  return [question, correctAnswer];
};

const runCalc = () => {
  run(description, generateRound);
};

export default runCalc;
