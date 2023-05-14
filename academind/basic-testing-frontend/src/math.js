import { cleanNumbers } from './util/numbers.js';

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += Number(number);
  }
  return sum;
}

/**
 *
 * @param {Array<number>} numberInputs
 * @returns
 */
export function calculateResult(numberInputs) {
  try {
    const numbers = cleanNumbers(numberInputs);

    const result = add(numbers).toString();

    return result;
  } catch (error) {
    return error?.message ?? 'Error';
  }
}
