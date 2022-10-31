import readlineSync from 'readline-sync';

export const timesCount = 3;
// export let name;

// export const playerGreeting = () => {
//   console.log('Welcome to the Brain Games!');
//   name = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${name}!`);
// };

// export const winGame = () => {
//   console.log(`Congratulations, ${name}!`);
// };

export const processGame = (gameTask, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameTask);
  let isSuccessful = true;
  for (let i = 0; i < timesCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer || +answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is a wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      isSuccessful = false;
      return;
    }
  }
  if (isSuccessful) {
    console.log(`Congratulations, ${name}!`);
  }
};
