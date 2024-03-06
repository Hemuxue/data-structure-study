/*
 * @lc app=leetcode.cn id=526 lang=typescript
 *
 * [526] 优美的排列
 */

// @lc code=start
function countArrangement(n: number): number {
  const arr = new Array(n + 1).fill(0);
  const match = new Array(n + 1).fill(0);
  let num = 0;
  for (let i = 0; i <= n; i++) {
    match[i] = [];
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i % j === 0 || j % i === 0) {
        match[i].push(j);
      }
    }
  }

  const fn = (index: number, n: number) => {
    if (index === n + 1) {
      num++;
      return;
    }
    for (const x of match[index]) {
      if (!arr[x]) {
        arr[x] = true;
        fn(index + 1, n);
        arr[x] = false;
      }
    }
  };
  fn(1, n);
  return num;
}
// @lc code=end
