import run from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

const gcd = (x, y) => ((y === 0) ? x : gcd(y, (x % y)));

const generateRound = () => {
  const number1 = generateNumber(minNumber, maxNumber);
  const number2 = generateNumber(minNumber, maxNumber);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return [question, correctAnswer];
};

const runGCD = () => {
  run(description, generateRound);
};

export default runGCD;
