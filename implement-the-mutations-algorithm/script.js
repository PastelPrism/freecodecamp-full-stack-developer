function mutation(array) { 
  const [first, second] = array.map(str => str.toLowerCase()); 
  for (let char of second) 
    { if (!first.includes(char)) 
    { return false; 
      } 
      } 
        return true; 
  }