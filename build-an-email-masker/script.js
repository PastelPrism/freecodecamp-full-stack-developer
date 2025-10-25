function maskEmail(email){
  const atIndex = email.indexOf("@");
  
  const local = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
     if (local.length <= 2) {
       return local + domain;
     }

  const firstChar = local[0];
  const lastChar = local[local.length -1];
  const middleMask = "*".repeat(local.length -2);
  return firstChar + middleMask + lastChar + domain;
}

const email = "apple.pie@example.com";
console.log(maskEmail(email));

const email1 = "freecodecamp@example.com";
console.log(maskEmail(email1));