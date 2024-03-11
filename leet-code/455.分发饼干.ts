/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  const sortG = g.sort((prev, next) => prev - next);
  const sortS = s.sort((prev, next) => prev - next);
  let countJ = 0;
  let result = 0;
  for (let i = 0; i < sortG.length; i++) {
    for (let j = countJ; j < sortS.length; j++) {
      if (sortS[j] >= sortG[i]) {
        countJ = j;
        result++;
        sortS.shift();
        break;
      }
    }
    if (sortG[i] > sortS[sortS.length - 1]) {
      return result;
    }
  }
}
// @lc code=end
