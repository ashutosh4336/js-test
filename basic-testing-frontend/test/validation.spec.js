import { validateNumber, validateStringNotEmpty } from '../src/util/validation';
import { it, expect, describe } from 'vitest';

describe('validateNumber()', () => {
  it('Should throw an error if the value is not a number', () => {
    const invalidNumber = 'invalid';

    const resultFn = () => {
      validateNumber(invalidNumber);
    };

    expect(resultFn).toThrow(/Invalid number input./);
  });

  it('Should be undefined if input is a valid number', () => {
    const validNumber = 4;
    const result = validateNumber(validNumber);

    expect(result).toBeUndefined();
  });
});

describe('validateStringNotEmpty()', () => {
  it('Should throw an error if the value is not a string', () => {
    const invalidString = 1;

    const resultFn = () => {
      validateStringNotEmpty(invalidString);
    };

    expect(resultFn).toThrow(/Input isn't a string/);
  });

  it('Should throw an error if the value is empty', () => {
    const invalidString = '';

    const resultFn = () => {
      validateStringNotEmpty(invalidString);
    };

    expect(resultFn).toThrow(/must not be empty/);
  });
});
