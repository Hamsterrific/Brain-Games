/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { processGame } from '../index.js';
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
  const correctAnswer = gcd(randomNumber1, randomNumber2);
  return [question, correctAnswer];
};

const runGCD = () => {
  processGame(gameTask, generateRound);
};

export { runGCD };
