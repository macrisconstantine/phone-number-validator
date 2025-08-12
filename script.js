function checkClick() {
  const resultsDiv = document.getElementById('results-div');
  const userInput = document.getElementById('user-input');
  const validNumberFormat = /^(1[\s-]?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  
  if (userInput.value == "") {
    alert("Please provide a phone number.");
  } else if (validNumberFormat.test(userInput.value)) {
    resultsDiv.innerHTML += "<br/>Valid US number: " + userInput.value;
  } else {
    resultsDiv.innerHTML += "<br/>Invalid US number: " + userInput.value;
  }
  
}

function clearClick() {
  const resultsDiv = document.getElementById('results-div');
  resultsDiv.innerHTML = "";  
}