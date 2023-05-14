export function extractNumbers(formData) {
  const num1Input = formData.get('num1');
  const num2Input = formData.get('num2');

  return [num1Input, num2Input];
}

export function extractEnteredNumbers(form) {
  const formData = new FormData(form);
  const [num1Input, num2Input] = extractNumbers(formData);

  return [num1Input, num2Input];
}
