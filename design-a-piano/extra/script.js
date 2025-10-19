const whiteNotes = ['cc', 'd', 'e', 'f', 'g', 'a', 'b', 'c'];

const keys = document.querySelectorAll('.key');
const whiteKeys = Array.from(keys).filter(key => !key.classList.contains('black--key'));

whiteKeys.forEach((key, index) => {
  key.dataset.note = whiteNotes[index % whiteNotes.length];
  
  if (index < 8) {
    key.classList.add('playable');
  }
});

keys.forEach((key) => {
  key.addEventListener('click', () => {
    const note = key.dataset.note;
    if (!note) return;

    const audio = new Audio(`sounds/${note}.wav`);
    audio.currentTime = 0;
    audio.play();
    
    key.classList.add('active');
    setTimeout(() => key.classList.remove('active'), 150);
  });
});

const keyMap = {
  a: 'cc',
  s: 'd',
  d: 'e',
  f: 'f',
  g: 'g',
  h: 'a',
  j: 'b',
  k: 'c'
};

document.addEventListener('keydown', (e) => {
  const note = keyMap[e.key.toLowerCase()];
  if (!note) return;

  const keyEl = [...keys].find(k => k.dataset.note === note);
  if (keyEl) keyEl.click(); 
});
