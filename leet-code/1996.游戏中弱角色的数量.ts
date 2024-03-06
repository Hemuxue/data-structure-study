/*
 * @lc app=leetcode.cn id=1996 lang=typescript
 *
 * [1996] 游戏中弱角色的数量
 */

// @lc code=start
var numberOfWeakCharacters = function (properties) {
  properties.sort((o1, o2) => {
    return o1[0] === o2[0] ? o2[1] - o1[1] : o1[0] - o2[0];
  });
  let ans = 0;
  const st = [];
  for (const p of properties) {
    while (st.length && st[st.length - 1] < p[1]) {
      st.pop();
      ans++;
    }
    st.push(p[1]);
  }
  return ans;
};

const properties = [
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
];
console.log(numberOfWeakCharacters(properties));
// @lc code=end
