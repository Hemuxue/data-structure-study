/*
 * @lc app=leetcode.cn id=918 lang=typescript
 *
 * [918] 环形子数组的最大和
 */

function getMinIndex(nums: number[]): number {
  let minIndex = 0;
  let minValue = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < minValue) {
      minIndex = i;
      minValue = nums[i];
    }
  }
  return minIndex;
}

// @lc code=start
function maxSubarraySumCircular1(nums: number[]): number {
  console.log(nums);
  const minIndex = getMinIndex(nums);

  function getArrValue(index: number) {
    return nums[index % nums.length];
  }

  let max = getArrValue(minIndex);
  let sum = max;
  for (let i = 1; i < nums.length; i++) {
    if (getArrValue(minIndex + i) > max && max < 0) {
      max = getArrValue(minIndex + i);
      sum = getArrValue(minIndex + i);
    } else if (getArrValue(minIndex + i) > 0 || sum + getArrValue(minIndex + i) > 0) {
      sum += getArrValue(minIndex + i);
      if (sum > max) {
        max = sum;
      }
    } else {
      sum = 0;
    }
  }
  return max;
}

function maxSubarraySumCircular(nums: number[]): number {
  function getArrValue(index: number) {
    return nums[index % nums.length];
  }
  let max = getArrValue(0);
  for (let i = 0; i < nums.length; i++) {
    let sum = getArrValue(i);
    max = Math.max(sum, max);
    for (let j = 1; j < nums.length; j++) {
      sum += getArrValue(i + j);
      max = Math.max(sum, max);
    }
  }
  return max;
}

const nums2 = [1, -2, 3, -2];

console.log(maxSubarraySumCircular(nums2));
// @lc code=end
