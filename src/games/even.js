import randomNumber from '../randomNumber.js';

const brainEven = () => {
  const data = [];
  data[0] = 'Answer "yes" if the number is even, otherwise answer "no".';
  const numVariant = [];
  for (let i = 0; i < 3; i += 1) {
    const a = randomNumber(100);
    let answer;
    switch (a) {
      case a % 2 === 0:
        answer = 'yes';
        break;
      default:
        answer = 'no';
        break;
    }
    numVariant.push([a, answer]);
  }
  data[1] = numVariant;
  return data;
};

export default brainEven;
