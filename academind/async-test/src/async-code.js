import jwt from 'jsonwebtoken';

const SECRET_KEY = '7f6c468fc56f4942b2f179d434dd1c56';

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello World');
  }, 1000);
});

const options = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

function generateToken(payload, done) {
  jwt.sign(payload, SECRET_KEY, options, done);
}

/**
 *
 * @param {Object} payload
 * @returns {Promise<string | Error>}
 */
async function generateTokenPromise(payload, throwError = false) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET_KEY, options, (err, token) => {
      if (throwError) reject(new Error('Error while generating token'));

      if (err) reject(err);

      resolve(token);
    });
  });
}

export { promise, generateToken, generateTokenPromise };
