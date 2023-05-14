import { it, expect, describe } from 'vitest';
import { transformToNumber } from '../src/util/numbers';

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
