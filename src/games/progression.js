import run from '../index.js';
import { generateNumber, generateIndex } from '../utils.js';

const gameTask = 'What number is missing in the progression?';
const minNumber = 1;
const maxNumber = 100;
const minStep = 1;
const maxStep = 5;
const minLength = 5;
const maxLength = 10;

const makeProgression = (number, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(number + (step * i));
  }
  return progression;
};

const hideNumber = (numbers) => {
  const index = generateIndex(numbers);
  const hiddenNumber = numbers[index];
  const result = numbers;
  result[index] = '..';
  return [result, hiddenNumber];
};

const generateRound = () => {
  const start = generateNumber(minNumber, maxNumber);
  const step = generateNumber(minStep, maxStep);
  const length = generateNumber(minLength, maxLength);
  const progression = makeProgression(start, step, length);
  const [hiddenProgression, hiddenNumber] = hideNumber(progression);
  const question = hiddenProgression.join(' ');
  const correctAnswer = String(hiddenNumber);
  return [question, correctAnswer];
};

const runProgression = () => {
  run(gameTask, generateRound);
};

export default runProgression;
