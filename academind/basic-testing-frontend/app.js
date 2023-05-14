import { calculateResult } from './src/math.js';
import { extractEnteredNumbers } from './src/parser.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();

  const numberValues = extractEnteredNumbers(form);

  const result = calculateResult(numberValues);

  output.textContent = `Result is: ${result}`;
}

form.addEventListener('submit', formSubmitHandler);
