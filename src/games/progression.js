import run from '../index.js';
import { generateRandomNumber, generateRandomIndex } from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const makeProgression = (number, step, length) => {
  const progArr = [];
  for (let i = 0; i < length; i += 1) {
    progArr.push(number + (step * i));
  }
  return progArr;
};

const generateRound = () => {
  let correctAnswer;
  const hideNumber = (arr) => {
    correctAnswer = generateRandomIndex(arr);
    const arrHidden = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const item of arr) {
      if (item === correctAnswer) {
        arrHidden.push('..');
      } else {
        arrHidden.push(item);
      }
    }
    return arrHidden;
  };
  const startingNumber = generateRandomNumber(1, 100);
  const progressionStep = generateRandomNumber(1, 5);
  const progressionLength = 5 + (generateRandomNumber(1, 10));
  const progression = makeProgression(startingNumber, progressionStep, progressionLength);
  const hiddenProgression = hideNumber(progression);
  const question = `${hiddenProgression.join(' ')}`;
  correctAnswer = correctAnswer.toString();
  return [question, correctAnswer];
};

const runProgression = () => {
  run(gameTask, generateRound);
};

export default runProgression;
