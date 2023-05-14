import {
  describe,
  it,
  vi,
  expect,
  afterEach,
  beforeAll,
  beforeEach,
} from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { Window } from 'happy-dom';

import { showError } from '../utils/dom.js';

const htmlDocPath = path.join(process.cwd(), '/index.html');
const htmlDoc = fs.readFileSync(htmlDocPath, 'utf8').toString();

const window = new Window();
const document = window.document;
document.write(htmlDoc);

vi.stubGlobal('document', document);

describe('DOM Module Testing', () => {
  //   it('should show error message', () => {
  //     showError('Test Error Message');
  //   });

  let errorEl = null;

  beforeAll(() => {
    errorEl = document.getElementById('errors');
  });

  afterEach(() => {
    errorEl.innerHTML = '';
  });

  beforeEach(() => {
    document.write(htmlDoc);
  });

  it('should add an error paragraph to the id="errors" element', () => {
    const errorMessage = 'Test Error Message';
    showError(errorMessage);

    const errorParagraph = errorEl.querySelector('p');

    expect(errorParagraph).not.toBe(null);
    expect(errorParagraph.textContent).toBe(errorMessage);
  });

  it("error shouldn't contain initially", () => {
    const errorParagraph = errorEl.querySelector('p');

    expect(errorParagraph).toBe(null);
  });
});
