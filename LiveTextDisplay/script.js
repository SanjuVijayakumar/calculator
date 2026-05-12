function updateDisplay() {
    const textInput = document.getElementById('textInput');
    const displayText = document.getElementById('displayText');
    displayText.textContent = textInput.value;
}

const textInput = document.getElementById('textInput');
textInput.addEventListener('input', updateDisplay);