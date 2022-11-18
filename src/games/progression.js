import run from '../index.js';
import { generateNumber, generateIndex } from '../utils.js';

const gameTask = 'What number is missing in the progression?';
const minStart = 1;
const maxStart = 100;
const minStep = 1;
const maxStep = 5;
const minLength = 5;
const maxLength = 10;

const makeProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const start = generateNumber(minStart, maxStart);
  const step = generateNumber(minStep, maxStep);
  const length = generateNumber(minLength, maxLength);
  const progression = makeProgression(start, step, length);
  const hiddenNumber = generateIndex(progression);
  const correctAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgression = () => {
  run(gameTask, generateRound);
};

export default runProgression;
