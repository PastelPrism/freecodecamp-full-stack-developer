    const jsInteractive = document.getElementById('jsInteractive');

    // Color picker
    jsInteractive.addEventListener('click', () => {
      const randomHex = '#' + Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0');
      jsInteractive.style.color = randomHex;
      jsInteractive.textContent = `The name of my color is ${randomHex} I want another color! Please click me again!! `;
    });