import { swap } from "./bubble-sort";

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

export default QuickSort;

const arr = [-100, -2, -3, 1];

console.log(QuickSort(arr));

console.log(arr);
