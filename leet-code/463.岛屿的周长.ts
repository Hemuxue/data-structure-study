/*
 * @lc app=leetcode.cn id=463 lang=typescript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
function islandPerimeter(grid: number[][]): number {
  const getData = (i: number, j: number) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length) {
      return null;
    }
    return grid[i][j];
  };
  const computeAroundData = (i: number, j: number) => {
    return [getData(i - 1, j), getData(i + 1, j), getData(i, j - 1), getData(i, j + 1)].filter(Boolean).length;
  };

  let len = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (getData(i, j)) {
        len += 4 - computeAroundData(i, j);
      }
    }
  }
  return len;
}

const data = [
  [1, 1, 1],
  [1, 0, 1],
];

islandPerimeter(data);
// @lc code=end
