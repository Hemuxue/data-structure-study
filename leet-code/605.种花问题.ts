function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = n;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      (i - 1 < 0 || flowerbed[i] === 0) &&
      flowerbed[i] === 0 &&
      (i + 1 >= flowerbed.length || flowerbed[i + 1] === 0)
    ) {
      count--;
      flowerbed[i] = 1;
    }
  }

  return count <= 0;
}

const temp = [0, 0, 1, 0, 1];
console.log(canPlaceFlowers(temp, 1));
