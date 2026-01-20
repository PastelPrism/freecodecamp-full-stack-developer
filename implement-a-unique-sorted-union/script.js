function uniteUnique(...arrays) {
  const result = [];

  arrays.flat().forEach(num => {
    if (!result.includes(num)) {
      result.push(num);
    }
  });

  return result;
}