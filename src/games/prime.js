import randomNumber from '../randomNumber.js';
import getPrime from '../getPrime.js';

const brainPrime = () => {
  const data = [];
  data[0] = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const numVariant = [];
  for (let i = 0; i < 3; i += 1) {
    const num = randomNumber(100);
    const answer = getPrime(num);
    numVariant.push([`${num}`, answer]);
  }
  data[1] = numVariant;
  return data;
};

export default brainPrime;
