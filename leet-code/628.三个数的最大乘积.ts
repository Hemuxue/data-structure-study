/*
 * @lc app=leetcode.cn id=628 lang=typescript
 *
 * [628] 三个数的最大乘积
 */

function swap(arr: number[], i: number, j: number) {
  if (i < 0 || j < 0 || i >= arr.length || j >= arr.length) {
    throw new Error("索引错误");
  }

  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr: number[], start: number, end: number): number {
  let pivot = arr[end];
  let i = start;
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, end);
  return i;
}

function QuickSortC(arr: number[], start: number, end: number) {
  if (start > end) {
    return;
  }
  let middle = partition(arr, start, end);
  QuickSortC(arr, start, middle - 1);
  QuickSortC(arr, middle + 1, end);
}

function QuickSort(arr: number[]) {
  QuickSortC(arr, 0, arr.length - 1);
}

// @lc code=start
function maximumProduct(nums: number[]): number {
  QuickSort(nums);
  const prev = nums[0] * nums[1] * nums[nums.length - 1];
  const len = nums.length - 3;
  const next = nums[len] * nums[len + 1] * nums[len + 2];
  return Math.max(prev, next);
}
// @lc code=end

const array = [-100, -2, -3, 1];
maximumProduct(array);
