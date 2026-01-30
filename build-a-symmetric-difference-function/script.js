function diffArray(array1, array2) {
  return array1
    .filter(item => !array2.includes(item))
    .concat(array2.filter(item => !array1.includes(item)));
}
