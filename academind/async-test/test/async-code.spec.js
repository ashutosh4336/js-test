import { describe, it, expect } from 'vitest';
import {
  promise,
  generateToken,
  generateTokenPromise,
} from '../src/async-code.js';

describe('AsyncCode Test', () => {
  it('should return a promise', () => {
    expect(promise).toBeInstanceOf(Promise);
  });
});

describe('generateToken()', () => {
  it('should return a token', (done) => {
    const payload = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    };

    generateToken(payload, (err, token) => {
      try {
        expect(err).toBeNull();
        expect(token).toBeDefined();
        expect(typeof token).toBe('string');
        expect(token).toBeTypeOf('string');

        // Failure Case :: expect(token).toBe('string');

        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('should return a token using promise', async () => {
    const payload = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    };

    expect(generateTokenPromise(payload)).resolves.toBeDefined();
    expect(generateTokenPromise(payload)).resolves.toBeTypeOf('string');
  });

  it('should return an error if something goes wrong.', async () => {
    const payload = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    };

    // expect(generateTokenPromise(payload, true)).rejects.toContain(
    //   /Error while generating token/
    // );

    expect(generateTokenPromise(payload, true)).rejects.toBeDefined();
    expect(generateTokenPromise(payload, true)).rejects.toBeInstanceOf(Error);
    expect(generateTokenPromise(payload, true)).rejects.toHaveProperty(
      'message',
      'Error while generating token'
    );
  });

  it('should return a token using async/await', async () => {
    const payload = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    };

    try {
      const token = await generateTokenPromise(payload);

      expect(token).toBeDefined();
      expect(typeof token).toBe('string');
      expect(token).toBeTypeOf('string');
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err).toHaveProperty('message', 'Error while generating token');
    }
  });
});
