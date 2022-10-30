import readlineSync from 'readline-sync';
import {
  name, playerGreeting, timesCount, winGame,
} from '../index.js';

let correctAnswer;
let isSuccessful = true;

const makeProgression = (number, step, length) => {
  const progArr = [];
  for (let i = 0; i < length; i += 1) {
    progArr.push(number + (step * i));
  }
  return progArr;
};

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

const generateRound = () => {
  const startingNumber = Math.floor(Math.random() * 101);
  const progressionStep = Math.ceil(Math.random() * 7);
  const progressionLength = 5 + (Math.floor(Math.random() * 11));
  const progression = makeProgression(startingNumber, progressionStep, progressionLength);
  const hiddenProgression = hideNumber(progression);
  return `Question: ${hiddenProgression.join(' ')}`;
};

const runProgression = () => {
  playerGreeting();
  console.log('What number is missing from the progression?');
  for (let i = 0; i < timesCount; i += 1) {
    console.log(generateRound());
    const answer = +readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is a wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      isSuccessful = false;
      break;
    }
  }
  if (isSuccessful) {
    winGame();
  }
};

export { runProgression };
