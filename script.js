let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue === '') return;
  if (['+', '-', '*', '/', '^'].includes(displayValue.slice(-1))) return;
  displayValue += operator;
  updateDisplay();
}

function appendFunction(func) {
  let value = parseFloat(displayValue);
  switch (func) {
    case 'pi':
      displayValue += Math.PI.toString();
      break;
    case 'e':
      displayValue += Math.E.toString();
      break;
    case 'sqrt':
      displayValue = Math.sqrt(value).toString();
      break;
    case 'sin':
      displayValue = Math.sin(toRadians(value)).toString();
      break;
    case 'cos':
      displayValue = Math.cos(toRadians(value)).toString();
      break;
    case 'tan':
      displayValue = Math.tan(toRadians(value)).toString();
      break;
    case 'log':
      displayValue = Math.log10(value).toString();
      break;
    case 'ln':
      displayValue = Math.log(value).toString();
      break;
    case 'exp':
      displayValue = Math.exp(value).toString();
      break;
    case 'fact':
      displayValue = factorial(value).toString();
      break;
  }
  updateDisplay();
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function toggleSign() {
  displayValue = displayValue.startsWith('-') ? displayValue.slice(1) : '-' + displayValue;
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue.replace('^', '**')).toString();
    updateDisplay();
  } catch {
    displayValue = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}