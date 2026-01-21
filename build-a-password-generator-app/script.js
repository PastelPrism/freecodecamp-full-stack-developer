function generatePassword(length) {
  const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * char.length);
    result += char[randomIndex];
  }

  return result;
}

const password = generatePassword(12);

console.log(`Generated password: ${password}`);