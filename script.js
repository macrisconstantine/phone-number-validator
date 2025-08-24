function checkClick() {
  const resultsDiv = document.getElementById('results-div');
  const userInput = document.getElementById('user-input');
  const validNumberFormat = /^(1[\s-]?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  
  if (userInput.value == "") {
    alert("Please provide a phone number.");
  } else if (validNumberFormat.test(userInput.value)) {
    resultsDiv.innerHTML = "<br/><br/>Valid US number: " + userInput.value + resultsDiv.innerHTML;
  } else {
    resultsDiv.innerHTML = "<br/><br/>Invalid US number: " + userInput.value + resultsDiv.innerHTML;
  }
  
}

function clearClick() {
  const resultsDiv = document.getElementById('results-div');
  resultsDiv.innerHTML = "";  
}


const emojis = ['✨','💫','🌸','🪩','🔥','💖'];
document.addEventListener('mousemove', e => {
  const emoji = document.createElement('div');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.position = 'fixed';
  emoji.style.left = e.pageX + 'px';
  emoji.style.top = e.pageY + 'px';
  emoji.style.pointerEvents = 'none';
  emoji.style.fontSize = '20px';
  emoji.style.opacity = 1;
  emoji.style.transition = 'transform 1s, opacity 1s';
  document.body.appendChild(emoji);
  requestAnimationFrame(() => {
    emoji.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 1) * 100}px)`;
    emoji.style.opacity = 0;
  });
  setTimeout(() => emoji.remove(), 1000);
});
