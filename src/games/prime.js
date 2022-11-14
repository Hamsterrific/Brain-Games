import run from '../index.js';
import { generateNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
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
  const number = generateNumber(1, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrime = () => {
  run(description, generateRound);
};

export default runPrime;
