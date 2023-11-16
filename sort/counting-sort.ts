function findMaxValue(array: number[]) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function countingSort(array: number[]) {
  console.log(array);
  if (array.length < 2) {
    return array;
  }

  const max = findMaxValue(array);
  const countArray = new Array(max + 1);

  array.forEach((ele) => {
    if (!countArray[ele]) {
      countArray[ele] = 0;
    }
    countArray[ele]++;
  });

  let sortIndex = 0;
  countArray.forEach((count, i) => {
    while (count > 0) {
      array[sortIndex++] = i;
      count--;
    }
  });

  return array;
}

const arr1 = [5, 2, 1, 7, 3, 6, 8, 10, 2];

console.log(countingSort(arr1));
