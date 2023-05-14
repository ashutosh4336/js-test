import { it, test, expect, describe } from 'vitest';
import { add } from '../src/math';

describe('add()', () => {
  it('should summarize all number values in a array', () => {
    // arrange
    const numbers = [3, 4, 5];
    const calculatedResult = numbers.reduce((acc, curr) => acc + curr, 0);

    // act
    const result = add(numbers);

    // assert
    expect(result, 'Numbers sum should be 10').toBe(calculatedResult);
  });

  it('should yield NaN if at least one number is invalid', () => {
    const numbers = [12, 'invalid'];

    const result = add(numbers);

    expect(result).toBeNaN();
  });

  it('should yield correct sum if the numbers provided in string.', () => {
    const numbers = ['3', '4', '5'];
    const calculatedResult = numbers.reduce(
      (acc, curr) => Number(acc) + Number(curr),
      0
    );

    const result = add(numbers);

    expect(result).toBe(calculatedResult);
  });

  it('Should yield 0 if an empty array is passed', () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
  });

  it('Should throw an error if no argument passed', () => {
    const resultFn = () => {
      add();
    };

    expect(resultFn).toThrow(/is not iterable/);
  });

  it('Should throw an error if provided multiple arguments instead of one array', () => {
    const argOne = 1;
    const argTwo = 2;

    const resultFn = () => {
      add(argOne, argTwo);
    };

    expect(resultFn).toThrow(/is not iterable/);
  });
});
