import run from '../index.js';
import { generateRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (number) => {
  if (number === 0 || number === 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const question = `${randomNumber}`;
  let correctAnswer;
  if (checkPrime(randomNumber)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

const runPrime = () => {
  run(description, generateRound);
};

export default runPrime;
