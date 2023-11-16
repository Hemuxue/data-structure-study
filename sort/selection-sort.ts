import { swap } from "./bubble-sort";

function selectionSort(arr: number[]) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(arr, minIndex, i);
    }
  }
  return arr;
}

const arr = [5, 2, 1, 7, 3, 6, 8, 10, 2];

console.log(selectionSort(arr));
