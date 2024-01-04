/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let count = 0;
  let cur;
  for (let i = 0; i < prices.length - 1; i++) {
    if (!cur && prices[i + 1] > prices[i]) {
      cur = prices[i];
    }
    if (cur < prices[i + 1]) {
      count += prices[i + 1] - cur;
      cur = undefined;
    }
  }
  return count;
}

const prices2 = [2, 1, 2, 0, 1];
maxProfit(prices2);
// @lc code=end
