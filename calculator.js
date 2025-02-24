let history = []; // Array to store the last 3 calculations

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
    const result = new Function(`return ${display.value}`)();
    // Save the calculation to history
    if (display.value.trim() !== '') {
      history.unshift(`${display.value} = ${result}`);
      if (history.length > 3) history.pop(); // Keep only the last 3 calculations
    }
    display.value = result;
  } catch (error) {
    display.value = 'Error';
    display.style.color = 'red';
    setTimeout(() => {
      display.style.color = '';
    }, 1000);
  }
}

function showHistory() {
  const historyDiv = document.getElementById('history');
  if (history.length > 0) {
    historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    historyDiv.style.display = 'block';
  } else {
    historyDiv.innerHTML = '<p>No history available</p>';
    historyDiv.style.display = 'block';
  }
}
