import readlineSync from 'readline-sync';
import {
  name, playerGreeting, timesCount, winGame,
} from '../index.js';
import { generateRandomNumber } from '../utils.js';

let isSuccessful = true;

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
    correctAnswer = arr[Math.floor(Math.random() * arr.length)];
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
  const question = `Question: ${hiddenProgression.join(' ')}`;
  return [question, correctAnswer];
};

const runProgression = () => {
  playerGreeting();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < timesCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(question);
    const answer = +readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is a wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      isSuccessful = false;
      return;
    }
  }
  if (isSuccessful) {
    winGame();
  }
};

export { runProgression };
