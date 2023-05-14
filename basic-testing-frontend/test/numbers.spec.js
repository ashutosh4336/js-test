import { it, expect, describe } from 'vitest';
import { transformToNumber, cleanNumbers } from '../src/util/numbers';

expect.extend({
  toBeType(received, argument) {
    const initialType = typeof received;
    const type =
      initialType === 'object'
        ? Array.isArray(received)
          ? 'array'
          : initialType
        : initialType;

    return type === argument
      ? {
          message: () => `expected ${received} to be type ${argument}`,
          pass: true,
        }
      : {
          message: () => `expected ${received} to be type ${argument}`,
          pass: false,
        };
  },
});

describe('transformToNumber()', () => {
  it('Should return a number', () => {
    const result = transformToNumber('1');

    expect(result).toBeTypeOf('number');
  });

  it('Should return exact value', () => {
    const number = '1';
    const expectedResult = Number(number);

    const result = transformToNumber(number);

    expect(result).toBe(expectedResult);
  });

  it('Should return NaN if the value is not a number', () => {
    const invalidNumber = 'invalid';
    const result = transformToNumber(invalidNumber);

    expect(result).toBeNaN();
  });
});

describe('cleanNumbers()', () => {
  it('Should return an array', () => {
    const result = cleanNumbers(['1']);

    expect(result).toBeType('array');
  });

  it('Should return an array of numbers', () => {
    const result = cleanNumbers(['1', '2', '3']);
    const expectedResult = [1, 2, 3];

    expect(result).toEqual(expectedResult);
  });

  it('Should return array with numbers', () => {
    const result = cleanNumbers(['1', '2', '3']);

    expect(result[0]).toBeTypeOf('number');
    expect(result[1]).toBeTypeOf('number');
    expect(result[2]).toBeTypeOf('number');

    expect(result).toContain(1);
    expect(result).toContain(2);
    expect(result).toContain(3);
  });

  it('Should throw an error if the input is not a string', () => {
    const invalidInput = [1, 2, 3];

    expect(() => cleanNumbers(invalidInput)).toThrow();
  });

  it('Should throw an error if the input is an empty string', () => {
    const invalidInput = ['', 1];

    expect(() => cleanNumbers(invalidInput)).toThrow();
  });

  it('Should throw an error if the input is a string with spaces', () => {
    const invalidInput = [' '];

    expect(() => cleanNumbers(invalidInput)).toThrow();
  });

  it('Should throw an error if the input is a string with letters', () => {
    const invalidInput = ['a'];

    expect(() => cleanNumbers(invalidInput)).toThrow();
  });

  it('Should throw an error if the input is a string with special characters', () => {
    const invalidInput = ['!'];

    expect(() => cleanNumbers(invalidInput)).toThrow();
  });

  it('Should throw an error if the input is a string with letters and numbers', () => {
    const invalidInput = ['1a'];

    expect(() => cleanNumbers(invalidInput)).toThrow();
  });

  it('Should throw an error if the input is a string with special characters and numbers', () => {
    const invalidInput = ['1!'];

    expect(() => cleanNumbers(invalidInput)).toThrow();
  });
});
