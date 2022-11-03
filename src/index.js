import readlineSync from 'readline-sync';

export const roundNumber = 3;
// export let name;

// export const playerGreeting = () => {
//   console.log('Welcome to the Brain Games!');
//   name = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${name}!`);
// };

// export const winGame = () => {
//   console.log(`Congratulations, ${name}!`);
// };

export const run = (gameTask, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameTask);
  for (let i = 0; i < roundNumber; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is a wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
