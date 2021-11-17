import randomNumber from '../randomNumber.js';

const brainCalc = () => {
  const data = [];
  data[0] = 'What is the result of the expression?';
  const numVariant = [];
  const mark = ['+', '-', '*'];
  for (let i = 0; i < 3; i += 1) {
    const a = randomNumber(10);
    const b = randomNumber(10);
    const c = mark[randomNumber(3)];
    let answer;
    switch (c) {
      case '+':
        answer = a + b;
        break;
      case '-':
        answer = a - b;
        break;
      case '*':
        answer = a * b;
        break;
      default:
        break;
    }
    numVariant.push([`${a}${c}${b}`, answer]);
  }
  data[1] = numVariant;
  return data;
};

export default brainCalc;
