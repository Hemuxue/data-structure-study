/*
 * @lc app=leetcode.cn id=207 lang=typescript
 *
 * [207] 课程表
 */

// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const adjArr = [];
  let hasCycle = false;
  for (let i = 0; i < numCourses; i++) {
    adjArr.push([]);
  }
  prerequisites.forEach((ele) => {
    const [i, j] = ele;
    adjArr[i].push(j);
  });

  const dfs = (v: number) => {
    if (onPath[v]) {
      hasCycle = true;
    }
    if (visited[v] || hasCycle) {
      return;
    }
    visited[v] = true;
    onPath[v] = true;
    adjArr[v].forEach((ele) => {
      dfs(ele);
    });
    onPath[v] = false;
  };

  const visited = new Array(numCourses).fill(false);
  const onPath = new Array(numCourses).fill(false);
  for (let i = 0; i < numCourses; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }

  return !hasCycle;
}

const pre = [
  [1, 4],
  [2, 4],
  [3, 1],
  [3, 2],
];
canFinish(5, pre);

// @lc code=end
