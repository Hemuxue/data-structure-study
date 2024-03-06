/*
 * @lc app=leetcode.cn id=38 lang=typescript
 *
 * [38] 外观数列
 */

// @lc code=start
function countAndSay(n: number): string {
  const compute = (str: string) => {
    const strArr = str.split("");
    const arr: any[][] = [];
    strArr.forEach((ele: string, index) => {
      if (index === 0) {
        arr.push([ele]);
      } else {
        const last = arr[arr.length - 1];
        if (ele === last[0]) {
          last.push(ele);
        } else {
          arr.push([ele]);
        }
      }
    });
    let strDes = "";
    arr.forEach((ele) => {
      strDes += `${ele.length}${ele[0]}`;
    });
    return strDes;
  };

  let result = "1";
  for (let i = 1; i < n; i++) {
    result = compute(result);
  }
  return result;
}

console.log(countAndSay(5));
// @lc code=end
