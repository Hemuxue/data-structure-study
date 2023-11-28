function maxProfit(prices: number[]): number {
  let result = 0;
  let startIndex: number;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      startIndex = i;
      break;
    }
  }
  if (startIndex === undefined) {
    return 0;
  }
  let min = prices[startIndex];
  let max = prices[startIndex + 1];
  result = max - min;
  for (let i = startIndex; i < prices.length - 1; i++) {
    if (min > prices[i]) {
      min = prices[i];
      max = Math.max(prices[i], prices[i + 1]);
    } else {
      max = Math.max(max, prices[i + 1]);
    }
    result = Math.max(result, max - min);
  }
  return result;
}

const prices = [2, 1, 2, 0, 1];
console.log(maxProfit(prices));
