const getDivider = (num) => {
  const dividerArray = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      dividerArray.push(i);
    }
  }
  return dividerArray;
};

export default getDivider;
