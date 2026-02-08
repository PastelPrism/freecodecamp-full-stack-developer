function steamrollArray(array) {
  const result = [];

  function flatten(element) {
    if (Array.isArray(element)) {
      element.forEach(flatten);
    } else {
      result.push(element);
    }
  }

  flatten(array);
  return result;
}
