#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';

const timesCount = 3; // на случай если будет нужно поменять количество нужных верных ответов
let num;
let isSuccessful = true;
let correctAnswer;

console.log('Welcome to the Brain Games!');
console.log('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < timesCount; i += 1) {
  num = Math.floor(Math.random() * 101);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
    console.log('Correct!');
  } else {
    correctAnswer = (answer === 'yes' ? 'no' : 'yes');
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
    isSuccessful = false;
    break;
  }
}

if (isSuccessful) {
  console.log(`Congratulations, ${name}!`);
}
