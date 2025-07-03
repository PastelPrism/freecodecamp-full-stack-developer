
document.addEventListener("DOMContentLoaded", () => {
  const mainElement = document.getElementById("main");
  const titleElement = document.getElementById("title");
  
 
  const borderColors = ["#ff007f", "#00ffff", "#ff0055"];
  let colorIndex = 0;
  setInterval(() => {
    mainElement.style.borderColor = borderColors[colorIndex];
    colorIndex = (colorIndex + 1) % borderColors.length;
  }, 1000);
  
  
  mainElement.addEventListener("mousemove", (event) => {
    const rect = mainElement.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    titleElement.style.textShadow = `${offsetX / 10}px ${offsetY / 10}px 10px #00ffff`;
  });
});

