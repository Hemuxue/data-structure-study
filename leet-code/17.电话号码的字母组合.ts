/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  const map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  if (digits.length === 0) {
    return [];
  }
  let result = map[digits[0]];
  const digitsArr = digits.split("");
  for (let i = 1; i < digitsArr.length; i++) {
    const tempArr = [];
    result.forEach((ele) => {
      map[digitsArr[i]].forEach((char) => {
        tempArr.push(ele + char);
      });
    });
    result = tempArr;
  }
  return result;
}
// @lc code=end
