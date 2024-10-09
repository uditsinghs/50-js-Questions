// create a function that generates a number of a given range ---

const generateNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(generateNumber(100, 50));
