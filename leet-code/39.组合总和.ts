/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const result = [];

  function compute(arr: number[]) {
    return arr.reduce((prev, cur) => prev + cur, 0);
  }

  function deep(index: number, curArr: number[]) {
    const sum = compute(curArr);
    if (sum > target) {
      return;
    }
    if (sum === target) {
      result.push([...curArr]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      curArr.push(candidates[i]);
      deep(i, curArr);
      curArr.pop();
    }
  }
  for (let i = 0; i < candidates.length; i++) {
    const curArr = [];
    curArr.push(candidates[i]);
    deep(i, curArr);
  }
  return result;
}

const testArr1 = [2, 3, 6, 7];
const result2 = combinationSum(testArr1, 7);
console.log(result2);
// @lc code=end
