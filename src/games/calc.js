/* eslint-disable import/prefer-default-export */

import { processGame } from '../index.js';
import { generateRandomNumber } from '../utils.js';

const operators = ['+', '-', '*'];
const gameTask = 'What is the result of the expression?';

const generateRound = () => {
  const randomNumber1 = generateRandomNumber(1, 100);
  const randomNumber2 = generateRandomNumber(1, 100);
  const randomOperator = operators[Math.floor(Math.random() * 3)];
  const question = `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`;
  let correctAnswer;
  if (randomOperator === '+') {
    correctAnswer = randomNumber1 + randomNumber2;
  } else if (randomOperator === '-') {
    correctAnswer = randomNumber1 - randomNumber2;
  } else {
    correctAnswer = randomNumber1 * randomNumber2;
  }
  return [question, correctAnswer];
};

const runCalc = () => {
  processGame(gameTask, generateRound);
};

export { runCalc };
