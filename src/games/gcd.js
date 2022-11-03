/* eslint-disable no-param-reassign */
import { run } from '../index.js';
import { generateRandomNumber } from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let r;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const generateRound = () => {
  const randomNumber1 = generateRandomNumber(1, 100);
  const randomNumber2 = generateRandomNumber(1, 100);
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  const correctAnswer = gcd(randomNumber1, randomNumber2).toString();
  return [question, correctAnswer.toString()];
};

const runGCD = () => {
  run(gameTask, generateRound);
};

export default runGCD;
