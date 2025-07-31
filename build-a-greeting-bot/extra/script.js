// Conversation lines for TeacherBot
const conversation = [
  { sender: "bot", text: "Hi there!" },
  { sender: "bot", text: "I am excited to talk to you." },
  { sender: "bot", text: "Allow me to introduce myself." },
  { sender: "bot", text: "My name is TeacherBot." },
  { sender: "bot", text: "My nickname is ProfessorBot." },
  { sender: "bot", text: "I love my nickname but I wish people would call me AwesomeTeacherBot." },
  { sender: "bot", text: "My favorite subject is Computer Science." },
  { sender: "bot", text: "Well, it was nice to talk to you. Have a nice day!" }
];

let idx = 0;
const chatWindow = document.getElementById("chat");

// User input Container
const inputContainer = document.createElement("div");
inputContainer.style.display = "flex";
inputContainer.style.margin = "1rem 0 0 0";
const userInput = document.createElement("input");
userInput.type = "text";
userInput.placeholder = "Say something to TeacherBot...";
userInput.style.flex = "1";
userInput.style.padding = "0.5rem";
userInput.style.fontSize = "1rem";
userInput.style.border = "1px solid #ccd0d5";
userInput.style.borderRadius = "6px 0 0 6px";
const sendBtn = document.createElement("button");
sendBtn.textContent = "Send";
sendBtn.style.padding = "0.5rem 1rem";
sendBtn.style.fontSize = "1rem";
sendBtn.style.border = "1px solid #2563eb";
sendBtn.style.background = "#63915dff";
sendBtn.style.color = "white";
sendBtn.style.borderRadius = "0 6px 6px 0";
sendBtn.style.cursor = "pointer";
inputContainer.appendChild(userInput);
inputContainer.appendChild(sendBtn);

const nextBtn = document.getElementById("nextBtn");
nextBtn.style.display = "none";
nextBtn.parentNode.appendChild(inputContainer);

//typewriter effect
function showMessage(text, sender, typewriter = false, callback) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  if (typewriter && sender === "bot") {
    let i = 0;
    function typeChar() {
      msg.textContent = text.slice(0, i);
      chatWindow.scrollTop = chatWindow.scrollHeight;
      if (i < text.length) {
        i++;
        setTimeout(typeChar, 25);
      } else {
        msg.textContent = text;
        if (callback) callback();
      }
    }
    typeChar();
  } else {
    msg.textContent = text;
    if (callback) callback();
  }
}

//Placeholder text
function setInputState(enabled, placeholder = "Say something to TeacherBot...") {
  userInput.disabled = !enabled;
  sendBtn.disabled = !enabled;
  userInput.placeholder = placeholder;
  if (enabled) userInput.focus();
}


function resetConversation() {
  chatWindow.innerHTML = "";
  idx = 0;

  // First message from TeacherBot
  if (conversation[0].sender === "bot") {
    showMessage(conversation[0].text, "bot", true, () => {
      setInputState(true);
    });
    idx = 1;
  }
  setInputState(false, "...");
  userInput.value = "";
}

// Conversation handler
function handleUserInput() {
  const text = userInput.value.trim();
  if (!text) return;
  if (idx >= conversation.length) {
    resetConversation();
    return;
  }
  showMessage(text, "user");
  userInput.value = "";
  setInputState(false, "...");
  if (conversation[idx] && conversation[idx].sender === "bot") {
    setTimeout(() => {
      showMessage(conversation[idx].text, "bot", true, () => {
        idx++;
        if (idx < conversation.length) {
          setInputState(true);
        } else {
          userInput.value = "";
          userInput.disabled = true;
          sendBtn.textContent = "Restart";
          sendBtn.disabled = false;
          sendBtn.classList.add("restart");
        }
      });
    }, 1000);
  }
}

// Buttons that listen to events and clicks
sendBtn.addEventListener("click", () => {
  if (sendBtn.classList.contains("restart")) {
    sendBtn.classList.remove("restart");
    sendBtn.textContent = "Send";
    resetConversation();
  } else {
    handleUserInput();
  }
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !sendBtn.disabled && !sendBtn.classList.contains("restart")) {
    handleUserInput();
  } else if (e.key === "Enter" && sendBtn.classList.contains("restart")) {
    sendBtn.classList.remove("restart");
    sendBtn.textContent = "Send";
    resetConversation();
  }
});

userInput.addEventListener("focus", () => {
  if (sendBtn.classList.contains("restart")) {
    sendBtn.classList.remove("restart");
    sendBtn.textContent = "Send";
    resetConversation();
  }
});

//Reset conversation on page load
resetConversation();