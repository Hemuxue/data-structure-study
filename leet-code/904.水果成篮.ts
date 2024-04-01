/*
 * @lc app=leetcode.cn id=904 lang=typescript
 *
 * [904] 水果成篮
 */

// @lc code=start

// 硬解法， 方法一
function totalFruit1(fruits: number[]): number {
  let a = 0;
  let tempA: number = null;
  let tempB: number = null;
  let result = 0;
  for (let i = 0; i < fruits.length; i++) {
    a += 1;
    tempA = fruits[i];
    for (let j = i + 1; j < fruits.length; j++) {
      tempB = fruits[j] !== tempA && tempB === null ? fruits[j] : tempB;
      if (j === fruits.length - 1) {
        return Math.max(result, j - i + (tempA === fruits[j] || tempB === fruits[j] ? 1 : 0));
      }
      if (tempA !== null && tempB !== null && fruits[j] !== tempA && fruits[j] !== tempB) {
        tempA = null;
        tempB = null;
        result = Math.max(result, a);
        a = 0;
        break;
      }
      a += 1;
    }
    result = Math.max(result, a);
  }
  return result;
}

function totalFruit(fruits: number[]): number {
  if (fruits.length <= 2) {
    return fruits.length;
  }
  let a = 0;
  let len = fruits.length;
  let i = 0;
  let j = 0;

  const arr = [];
  while (i < len && j < len) {
    if (arr.length === 2 && !arr.find((ele) => ele.value === fruits[j])) {
      arr.shift();
      a = Math.max(a, j - i);
      i = arr[0]?.index;
    } else {
      if (arr.length === 2) {
        if (arr.find((ele) => ele.value === fruits[j]) && arr[1].value !== fruits[j]) {
          arr.push({ value: fruits[j], index: j });
          arr.shift();
        }
      } else if (!arr.find((ele) => ele.value === fruits[j])) {
        arr.push({ value: fruits[j], index: j });
      }
      j++;
    }
  }
  a = Math.max(a, j - i);
  return a;
}

const fruits = [0, 1, 6, 6, 4, 4, 6];
const a = totalFruit(fruits);
// @lc code=end
