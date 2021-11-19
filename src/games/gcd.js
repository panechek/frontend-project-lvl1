import randomNumber from '../randomNumber.js';
import getDivider from '../getDivider.js';

const brainGcd = () => {
  const data = [];
  data[0] = 'Find the greatest common divisor of given numbers.';
  const numVariant = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = randomNumber(100);
    const secondNumber = randomNumber(100);
    const firstDivider = getDivider(firstNumber) + 1;
    const secondDivider = getDivider(secondNumber) + 1;
    const commonDivider = [];
    for (let j = 0; j < firstDivider.length; j += 1) {
      if (secondDivider.includes(firstDivider[j])) {
        commonDivider.push(firstDivider[j]);
      }
    }
    numVariant.push([`${firstNumber} ${secondNumber}`, commonDivider[commonDivider.length - 1]]);
  }
  data[1] = numVariant;
  return data;
};

export default brainGcd;
