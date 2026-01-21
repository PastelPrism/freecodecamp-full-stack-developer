function sumAll(array) {
  const min = Math.min(array[0], array[1]);
  const max = Math.max(array[0], array[1]);

  let total = 0;

  for (let i = min; i <= max; i++) {
    total += i;
  }

  return total;
}