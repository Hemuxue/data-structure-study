import { swap } from "./bubble-sort";

export function insertionSort(arr: number[]) {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    let j = i;
    let temp = arr[i];
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

const arr = [5, 2, 1, 7, 3, 6, 8, 10, 2];

console.log(insertionSort(arr));
