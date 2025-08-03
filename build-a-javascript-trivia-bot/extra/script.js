
console.log("Hello! I'm your coding fun fact guide!");

const botName = "Lily";
const botLocation = "Earth";
const favoriteLanguage = "CSS";

const facts = [
  `Did you know that when you click on the "Next Fact" button, a new fun fact will appear?`,
  `Did you know that my name is ${botName} and I am a robot. My favorite language is ${favoriteLanguage}!`,
  `Did you know that ${favoriteLanguage} is one of the main three languages used to design website content?`,
  `And did you know that ${favoriteLanguage} is one of the most versatile languages?`
];

let currentFactIndex = 0;


function showFact() {
  const bubble = document.getElementById("speech");
  bubble.textContent = facts[currentFactIndex];
  console.log(facts[currentFactIndex]);
  currentFactIndex = (currentFactIndex + 1) % facts.length;
}

document.getElementById("next-btn")
        .addEventListener("click", showFact);

window.addEventListener("DOMContentLoaded", () => {
  showFact();
  console.log(`It was fun sharing these facts with you. Goodbye! - ${botName} from ${botLocation}.`);
});
