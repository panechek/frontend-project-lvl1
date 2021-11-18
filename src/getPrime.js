const getPrime = (num) => {
  const dividerArray = [];
  let prime;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      dividerArray.push(i);
    }
  }
  if (dividerArray.length <= 2) {
    prime = 'yes';
  } else {
    prime = 'no';
  }
  return prime;
};

export default getPrime;
