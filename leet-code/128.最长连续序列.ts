/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  const hashArr = [];
  const minusHasArr = [];
  if (nums.length === 0) {
    return 0;
  }
  nums.forEach((ele) => {
    if (ele > 0) {
      hashArr[ele] = ele;
    } else {
      minusHasArr[Math.abs(ele)] = ele;
    }
  });
  let max = 1;
  let count = 1;

  const arr = minusHasArr.length > 0 ? minusHasArr.reverse().concat(hashArr) : hashArr;
  arr
    .filter((ele) => ele !== undefined || ele !== null)
    .reduce((prev, current) => {
      if (current - prev === 1) {
        count++;
      } else {
        max = Math.max(max, count);
        count = 1;
      }
      return current;
    }, undefined);

  return Math.max(max, count);
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// @lc code=end
