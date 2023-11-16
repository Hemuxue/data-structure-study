export function swap(arr: number[], i: number, j: number) {
  if (i < 0 || j < 0 || i >= arr.length || j >= arr.length) {
    throw new Error("索引错误");
  }

  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function BubbleSort(arr: number[]) {
  const length = arr.length;
  console.log(length);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

const arr = [5, 2, 1, 7, 3, 6, 8, 10, 2];

// console.log(BubbleSort(arr));
