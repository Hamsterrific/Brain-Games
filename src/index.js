import readlineSync from 'readline-sync';

export const timesCount = 3;
export let name;

export const playerGreeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const winGame = () => {
  console.log(`Congratulations, ${name}!`);
};
