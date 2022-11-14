/* eslint-disable no-param-reassign */
import run from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => {
  let z;
  while (y !== 0) {
    z = x % y;
    x = y;
    y = z;
  }
  return x;
};

const generateRound = () => {
  const number1 = generateNumber(1, 100);
  const number2 = generateNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return [question, correctAnswer];
};

const runGCD = () => {
  run(description, generateRound);
};

export default runGCD;
