import run from '../index.js';
import { generateNumber, generateIndex } from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const makeProgression = (number, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(number + (step * i));
  }
  return progression;
};

const hideNumber = (numbers) => {
  const hiddenNumber = numbers[generateIndex(numbers.length)];
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const number of numbers) {
    if (number === hiddenNumber) {
      result.push('..');
    } else {
      result.push(number);
    }
  }
  return [result, hiddenNumber];
};

const generateRound = () => {
  const startingNumber = generateNumber(1, 100);
  const progressionStep = generateNumber(1, 5);
  const progressionLength = 5 + (generateNumber(1, 10));
  const progression = makeProgression(startingNumber, progressionStep, progressionLength);
  const [hiddenProgression, hiddenNumber] = hideNumber(progression);
  const question = `${hiddenProgression.join(' ')}`;
  const correctAnswer = String(hiddenNumber);
  return [question, correctAnswer];
};

const runProgression = () => {
  run(gameTask, generateRound);
};

export default runProgression;
