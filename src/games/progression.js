import getProgression from '../getProgression.js';
import randomNumber from '../randomNumber.js';

const brainProgression = () => {
  const data = [];
  data[0] = 'What number is missing in the progression?';
  const numVariant = [];
  for (let i = 0; i < 3; i += 1) {
    const progression = getProgression();
    const a = randomNumber(10);
    const answer = progression[a];
    progression[a] = '..';
    numVariant.push([progression, answer]);
  }
  data[1] = numVariant;
  return data;
};

export default brainProgression;
