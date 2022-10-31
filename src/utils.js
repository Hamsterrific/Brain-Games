/* eslint-disable import/prefer-default-export */
const generateRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

export { generateRandomNumber };
