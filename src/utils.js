const generateRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);
const generateRandomIndex = (arr) => arr[Math.floor(Math.random() * arr.length)];

export { generateRandomNumber, generateRandomIndex };
