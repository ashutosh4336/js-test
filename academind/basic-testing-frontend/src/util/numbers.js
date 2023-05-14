import { validateNumber, validateStringNotEmpty } from './validation.js';

export function transformToNumber(value) {
  return +value;
}

export function cleanNumbers(numberValues) {
  const numbers = [];

  for (const number of numberValues) {
    validateStringNotEmpty(number);

    const resultNumber = transformToNumber(number);

    validateNumber(resultNumber);

    numbers.push(resultNumber);
  }

  return numbers;
}

console.log(cleanNumbers(['1', '2', '3']));
