function confirmEnding (string, check) {
  let ending = string.slice(string.length - check.length);
  return ending === check;
}