function merge(left: number[], right: number[]) {
  let array: number[] = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    array.push(left[i] < right[j] ? left[i++] : right[j++]);
  }

  return array.concat(i < left.length ? left.slice(i) : right.slice(j));
}

function mergeSort(arr: number[]) {
  let array = [...arr];
  const length = array.length;
  if (length > 1) {
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));

    array = merge(left, right);
  }

  return array;
}

const arr = [5, 2, 1, 7, 3, 6, 8, 10, 2];

console.log(mergeSort(arr));
