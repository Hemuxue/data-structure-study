function dailyTemperatures(temperatures: number[]): number[] {
  const stack: Array<{ value: number; index: number }> = [];
  const result = new Array(temperatures.length).fill(0);
  temperatures.forEach((ele, index) => {
    if (stack.length > 0) {
      while (stack[stack.length - 1]?.value < ele) {
        const cur = stack.pop();
        result[cur.index] = index - cur.index;
      }
      stack.push({ value: ele, index });
    } else {
      stack.push({ value: ele, index });
    }
  });

  return result;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));
