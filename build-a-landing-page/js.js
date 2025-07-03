document.addEventListener("DOMContentLoaded", function () {
  const text = "(I'm a placeholder!)";
  let index = 0;
  const typing = document.getElementById("typing");
  const speed = 100; 

  function typeWriter() {
    if (index < text.length) {
      typing.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
});
