/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  if (nums.length === 0) {
    return [];
  }
  let subSet = [];
  const getSubSet = (n: number) => {
    if (n >= nums.length) {
      return;
    }
    const tempSubSet = [];
    subSet.forEach((ele) => {
      tempSubSet.push([...ele, nums[n]]);
    });
    subSet = subSet.concat(tempSubSet);
    subSet.push([nums[n]]);
    getSubSet(n + 1);
  };
  getSubSet(0);

  return subSet.concat([[]]);
}

const subNums = [1, 2, 3];
subsets(subNums);
// @lc code=end
