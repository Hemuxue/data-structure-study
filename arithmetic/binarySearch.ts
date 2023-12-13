function binarySearchRecursive(array: number[], value: number, low: number, hight: number) {
  if (low < hight) {
    const mid = Math.floor((low + hight) / 2);
    const ele = array[mid];

    if (ele > value) {
      return binarySearchRecursive(array, value, mid + 1, hight);
    } else if (ele < value) {
      return binarySearchRecursive(array, value, low, mid - 1);
    } else {
      return mid;
    }
  }
  return null;
}

function binarySearch(array: number[], value: number) {
  QuickSortC(array, 0, array.length);
  const low = 0;
  const hight = array.length - 1;
  return binarySearchRecursive(array, value, low, hight);
}
