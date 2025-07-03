document.addEventListener("DOMContentLoaded", function () {
  const text = "(I'm a placeholder!)";
  let i = 0;
  const typingElement = document.getElementById("typing");
  const speed = 120; 

  function typeWriter() {
    if (i < text.length) {
      typingElement.textContent += text[i];
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
});
