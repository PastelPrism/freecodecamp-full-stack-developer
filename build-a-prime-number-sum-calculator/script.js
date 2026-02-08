function sumPrimes(number) {
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  let sum = 0;
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}
