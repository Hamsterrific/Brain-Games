/* eslint-disable import/prefer-default-export */
import { processGame } from '../index.js';
import { generateRandomNumber } from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const question = `Question: ${randomNumber}`;
  let correctAnswer;
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

const runEven = () => {
  processGame(gameTask, generateRound);
};

export { runEven };
