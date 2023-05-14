import crypto from 'crypto';
import path from 'path';
import * as fs from 'fs/promises';
import { describe, it, expect, afterAll, vi } from 'vitest';
import { writeData } from '../src/utils/io';

/**
 *  Spies, Mock, Stubs and Fakes
 *
 *  Spies -
 * 1. A spy is a wrapper around function or empty replacement for function that record information about the function's calls.
 *
 * 2. A spy only exists in the describe or it block in which it is defined, and will be removed after each spec.
 *
 *
 * 3.  A spy is a function that records arguments, return value, the value of this and exception thrown (if any) for all its calls. A spy only exists in the describe or it block in which it is defined, and will be removed after each spec. There are special matchers for interacting with spies.
 */

/**
 * Mocks -
 * 1. Mocks are fake methods (like spies) with pre-programmed behavior (like stubs) as well as pre-programmed expectations.
 *
 * 2. A mock will fail your spec if it is not used as expected.
 *
 * 3. There are special matchers for interacting with mocks.
 *
 * 4. Mocks are useful when you want to fake a function's response when it's called.
 */

/**
 * Stubs -
 * 1. Stubs are spies that also have pre-programmed behavior.
 *
 * 2. A stub can be more useful than a plain spy when you need to test a method that has complex functionality.
 *
 */

describe('IO Ops', () => {
  vi.mock('fs/promises');

  vi.mock('path', () => {
    return {
      default: {
        join: (...pathArgs) => {
          return pathArgs.at(-1);
        },
      },
    };
  });

  afterAll(() => {
    // Clean up the data directory
  });

  it('should execute writeFile', () => {
    const randomData = crypto.randomBytes(8).toString('hex');
    const fileName = crypto.randomBytes(4).toString('hex') + '.txt';

    writeData(randomData, fileName);

    // expect(writeData(randomData, fileName)).resolves.toBeUndefined();

    expect(fs.writeFile).toHaveBeenCalled();
    expect(fs.writeFile).toBeCalledTimes(1);
    expect(fs.writeFile).toBeCalledWith(fileName, randomData);
  });

  it('writeFile should return a promise which resolve to nothing', () => {
    const randomData = crypto.randomBytes(8).toString('hex');
    const fileName = crypto.randomBytes(4).toString('hex') + '.txt';

    expect(writeData(randomData, fileName)).resolves.toBeUndefined();
  });
});
