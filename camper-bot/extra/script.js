const riddles = [
  { question: "What has to be broken before you can use it?", answer: "🥚 An egg" },
  { question: "I have branches, but no fruit, trunk or leaves. What am I?", answer: "📁 A Repository" },
  { question: "What can you catch, but not throw?", answer: "🤧 A cold" },
  { question: "What goes up and down but doesn't move?", answer: "🪜 Stairs" },
  { question: "What band never makes music?", answer: "🔗 A rubber band" },
  { question: "Who is the greatest girl in the world?", answer: "👑💕 Lily! 💕👑" },
  { question: "Who is the greatest boy in the world?", answer: "👑💕 Lucas! 💕👑" }
]

const puzzlePara = document.querySelectorAll('p')[1]; 
let currentRiddle = null;
let showingAnswer = false;

console.log('Found paragraph:', puzzlePara);
console.log('Paragraph text:', puzzlePara ? puzzlePara.textContent : 'NOT FOUND');


if (puzzlePara) {
  puzzlePara.addEventListener('click', handleClick);
} else {
  console.error('Could not find the puzzle paragraph!');
}

function handleClick() {
  console.log('Click detected!');
  console.log('Current state - showing answer:', showingAnswer);
  
  if (!currentRiddle || showingAnswer) {
    showRiddle();
  } else {
    showAnswer();
  }
}


function showRiddle() {
  console.log('Showing new riddle...');
  showingAnswer = false;
  
  currentRiddle = riddles[Math.floor(Math.random() * riddles.length)];
  puzzlePara.textContent = `🧩 ${currentRiddle.question}`;
  puzzlePara.style.background = '#e8f4fd';
  puzzlePara.style.borderColor = '#3498db';
  console.log('Riddle displayed:', currentRiddle.question);
}

function showAnswer() {
  console.log('Showing answer...');
  if (currentRiddle) {
    puzzlePara.textContent = `${currentRiddle.answer}`;
    puzzlePara.style.background = '#d4edda';
    puzzlePara.style.borderColor = '#28a745';
    showingAnswer = true;
    console.log('Answer displayed:', currentRiddle.answer);
  }
}
