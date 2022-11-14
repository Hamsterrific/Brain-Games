const generateNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);
const generateIndex = (x) => Math.floor(Math.random() * x);

export { generateNumber, generateIndex };
