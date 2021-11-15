import readlineSync from 'readline-sync';

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question:  ${randomNumber}`);
    const answer = () => readlineSync.question('Your answer: ');
    if (answer() === rightAnswer) {
      console.log('Correct!');
    } else {
      return "'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again";
    }
  }
  return 'Congratulations';
};

export default evenGame;
