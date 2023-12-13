function canJump(nums: number[]): boolean {
  let distance = 1;
  let result = false;
  if (nums.length === 1) return true;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < distance) {
      distance++;
    } else {
      distance = 1;
    }
    if (i === 0 && nums[i] >= distance) {
      result = true;
    }
  }
  return result;
}

const nums = [2, 3, 1, 1, 4];

canJump(nums);
