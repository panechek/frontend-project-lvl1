import getName from './cli.js';
import brainEven from './games/even.js';
import brainCalc from './games/calc.js';
import getAnswer from '../getAnswer.js';

const gameStart = (gameName) => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}`);
  if (gameName !== 'brainGames') {
    let dataGame;
    switch (gameName) {
      case 'brainEven':
        dataGame = brainEven();
        break;
      case 'brainCalc':
        dataGame = brainCalc();
        break;
      default:
        break;
    }
    console.log(dataGame[0]);
    for (let i = 0; i < 3; i += 1) {
      console.log(`Question:  ${dataGame[1][i][0]}`);
      const answer = getAnswer();
      if (+(answer) === dataGame[1][i][1]) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${dataGame[1][i][1]} '.\n Let's try again`);
        break;
      }
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default gameStart;