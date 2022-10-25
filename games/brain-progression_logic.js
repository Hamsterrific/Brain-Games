import readlineSync from 'readline-sync';
import {
  name, playerGreeting, timesCount, winGame,
} from '../src/index.js';

let isSuccessful = true;
const gameProgression = () => {
  playerGreeting();
  console.log('What number is missing from the progression?');
  let hiddenNumber;
  const makeProgression = (number, step, length) => {
    const progArr = [];
    for (let i = 0; i < length; i += 1) {
      progArr.push(number + (step * i));
    }
    return progArr;
  };
  const hideNumber = (arr) => {
    hiddenNumber = arr[Math.floor(Math.random() * arr.length)];
    const arrHidden = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const item of arr) {
      if (item === hiddenNumber) {
        arrHidden.push('..');
      }
      else {
        arrHidden.push(item);
      }
    }
    return arrHidden;
  };
  for (let i = 0; i < timesCount; i += 1) {
    const startingNumber = Math.floor(Math.random() * 101);
    const progressionStep = Math.ceil(Math.random() * 7);
    const progressionLength = 5 + (Math.floor(Math.random() * 11));
    const progression = makeProgression(startingNumber, progressionStep, progressionLength);
    const hiddenProgression = hideNumber(progression);
    console.log(`Question: ${hiddenProgression.join(' ')}`);
    const answer = +readlineSync.question('Your answer: ');

    if (answer === hiddenNumber) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is a wrong answer ;(. Correct answer was ${hiddenNumber}.\nLet's try again, ${name}!`);
      isSuccessful = false;
      break;
    }
  }
  if (isSuccessful) {
    winGame();
  }
};

export {gameProgression};