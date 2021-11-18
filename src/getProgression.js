import randomNumber from './randomNumber.js';

const getProgression = () => {
  const progression = [];
  const step = randomNumber(10) + 1;
  for (let i = randomNumber(10); progression.length <= 10; i += step) {
    progression.push(i);
  }

  return progression;
};

export default getProgression;
