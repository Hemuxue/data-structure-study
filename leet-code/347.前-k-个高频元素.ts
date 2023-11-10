/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  var hs = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (hs.has(nums[i])) {
      hs.set(nums[i], hs.get(nums[i]) + 1);
    } else {
      hs.set(nums[i], 1);
    }
  }
  var arr = [...hs];
  arr.sort((a, b) => b[1] - a[1]);
  return arr.slice(0, k).map(function (a) {
    return a[0];
  });
}
// @lc code=end
