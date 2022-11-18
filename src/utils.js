const generateNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);
const generateIndex = (data) => Math.floor(Math.random() * data.length);

export { generateNumber, generateIndex };
