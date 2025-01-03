// Dummy bot responses
function getBotResponse() {
  let userText = document.getElementById("userInput").value;

  let botResponse = "I'm here to listen...";  // Replace with actual logic
  if (userText.includes("sad")) {
    botResponse = "I'm sorry you're feeling sad. Do you want to talk about it?";
  } else if (userText.includes("joke")) {
    botResponse = "Why don't scientists trust atoms? Because they make up everything! 😄";
  }

  document.getElementById("chatWindow").innerHTML += "<div>" + botResponse + "</div>";
  document.getElementById("userInput").value = "";  // Clear input
}
