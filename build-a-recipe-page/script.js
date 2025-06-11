
document.addEventListener("DOMContentLoaded", () => {
  // Ingredients toggle 
  const ingredientsBtn = document.getElementById("ingredients-btn");
  const ingredientsList = document.querySelector("#ingredients ul");

  // Instrictions toggle
  const instructionsBtn = document.getElementById("instructions-btn");
  const instructionsList = document.querySelector("#instructions ol");

  // Ingredients visability when button is clicked
  ingredientsBtn.addEventListener("click", () => {
    ingredientsList.classList.toggle("hidden");
  });

  // Instructions visibility when the button is clicked
  instructionsBtn.addEventListener("click", () => {
    instructionsList.classList.toggle("hidden");
  });

  // Insert a dynamic greeting based on the current time
  const greetingMessage = document.createElement("p");
  const now = new Date();
  const hour = now.getHours();
  let greetingText = "Hiii!";
  if (hour < 12) {
    greetingText = "Good morning - Wherever you are";
  } else if (hour < 18) {
    greetingText = "Good afternoon - Wherever you are";
  } else {
    greetingText = "Good evening - Wherever you are";
  }
  greetingMessage.textContent = `${greetingText} - Enjoy your pancakes and your day`;

  const firstParagraph = document.querySelector("main p");
  firstParagraph.parentNode.insertBefore(greetingMessage, firstParagraph);
});
