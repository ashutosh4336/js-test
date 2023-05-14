function validateStringNotEmpty(value) {
  if (typeof value !== 'string') {
    throw new Error("Invalid input - Input isn't a string.");
  }
  if (value.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  }
}

function validateNumber(number) {
  if (isNaN(number) || typeof number !== 'number') {
    throw new Error('Invalid number input.');
  }
}

exports.validateNumber = validateNumber;
exports.validateStringNotEmpty = validateStringNotEmpty;
