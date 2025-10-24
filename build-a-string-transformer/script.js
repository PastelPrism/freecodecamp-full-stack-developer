// Using string transformation methods: replace(), replaceAll(), and repeat()
const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

// Using replace() to change "cats" to "dogs"
const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

// Using replaceAll() to change all occurrences of "cats" to "dogs"
const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

// Using repeat() to create a repeated string and trimEnd() to remove extra space
const repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);