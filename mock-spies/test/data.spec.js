import { describe, it, expect, afterAll, vi } from 'vitest';
import { generateReportData } from '../src/data';

describe('generateReportData()', () => {
  it('should execute the log function if provided', () => {
    const logger = vi.fn();

    // logger.mockImplementation(() => {});
    // logger.mockImplementationOnce(() => {});

    generateReportData(logger);

    expect(logger).toHaveBeenCalled();
  });
});
