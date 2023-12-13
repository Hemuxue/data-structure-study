const minCoinChange = (coins: number[], amount) => {
  const sort = coins.sort((a, b) => b - a);
  console.log(sort);
  const map = {};
  let cuAmount = amount;
  for (let i = 0; i < coins.length; i++) {
    map[coins[i]] = Math.floor(cuAmount / coins[i]);
    cuAmount = cuAmount % coins[i];
    if (cuAmount === 0) {
      break;
    }
  }
  return map;
};

minCoinChange([5, 9, 1, 25], 37);
