function getIndexToIns(array, number) {
  const sorted = array.sort((a, b) => a - b);
  const index = sorted.findIndex(val => number <= val);
  return index === -1 ? sorted.length : index;
}
