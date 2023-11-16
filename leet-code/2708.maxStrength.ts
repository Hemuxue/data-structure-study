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

function multiplicationArr(arr: number[]) {
  const start = arr.findIndex((ele) => ele !== 0);
  if (start < 0) {
    return 0;
  }
  let result = Math.abs(arr[start]);
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] != 0) {
      result *= Math.abs(arr[i]);
    }
  }
  return result;
}

function maxStrength(nums: number[]): number {
  QuickSort(nums);
  const minusArr = [];
  let minusIndex = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      minusArr.push(nums[i]);
    }
    if (nums[i] < 0 && nums[i + 1] >= 0) {
      minusIndex = i;
    }
  }

  if (minusArr.length === 0 || (minusIndex + 1) % 2 === 0) {
    return multiplicationArr(nums);
  } else {
    if (nums.length === 1) {
      return nums[0];
    }
    nums.splice(minusIndex, 1);
    return multiplicationArr(nums);
  }
}

const array1 = [-9];

console.log(maxStrength(array1));
