import { writeData } from './utils/io.js';
import crypto from 'crypto';

export function generateReportData(log) {
  const data = crypto.randomBytes(1024 * 10).toString('hex');

  if (!!log) {
    log(data);
  }

  return data;
}

export async function storeData(data) {
  if (!data) {
    throw new Error('No data provided');
  }

  await writeData(data, 'data.txt');
}
