function sumFibs(number) {
 
  let previous = 0;  
  let current = 1;   

  let sum = 0;   

  while (current <= number) {

    if (current % 2 !== 0) {
      sum += current;  
    }

    const next = previous + current; 
    previous = current;              
    current = next;              
  }

  return sum;
}
