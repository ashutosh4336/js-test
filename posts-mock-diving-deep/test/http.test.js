import { describe, it, vi, expect } from 'vitest';
import { sendDataRequest } from '../utils/http.js';
import { HttpError } from '../utils/errors.js';
const testResponseData = { testKey: 'testData' };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      reject(new Error('Body is not string.'));
    }

    const response = {
      ok: true,
      json: () => {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };

    resolve(response);
  });
});

vi.stubGlobal('fetch', testFetch);

describe('HTTP Test suite', () => {
  const testData = {
    userId: 1,
    title: 'A generic title',
    body: 'A mediocre Body',
  };

  it('should return any available data', () => {
    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
  });

  it('should convert provided data to JSON before sending request', async () => {
    let errorMessage = '';
    try {
      await sendDataRequest(testData);
    } catch (error) {
      errorMessage = error?.message ?? '';
    }

    expect(errorMessage).not.toBe('Body is not string.');
  });

  it('should throw an error if the request fails', () => {
    testFetch.mockImplementationOnce((url, options) => {
      return new Promise((resolve, reject) => {
        const response = {
          ok: false,
          json: () => {
            return new Promise((resolve, reject) => {
              resolve(testResponseData);
            });
          },
        };

        resolve(response);
      });
    });

    vi.stubGlobal('fetch', testFetch);

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
  });
});
