import run from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 1;
const maxNumber = 100;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = generateNumber(minNumber, maxNumber);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEven = () => {
  run(description, generateRound);
};

export default runEven;
