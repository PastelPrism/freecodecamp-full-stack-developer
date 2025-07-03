document.addEventListener("DOMContentLoaded", () => {
  const text = "(I'M A PLACEHOLDER!)";
  let pos = 0;
  const target = document.getElementById("typing");
  const delay = 150; 

  function typeEffect() {
    if (pos < text.length) {
      target.innerHTML += text.charAt(pos);
      pos++;
      setTimeout(typeEffect, delay);
    }
  }
  typeEffect();
});
