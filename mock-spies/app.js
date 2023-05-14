import { generateReportData, storeData } from './src/data.js';
import log from './src/utils/logger.js';

const data = generateReportData(log);
storeData(data);
