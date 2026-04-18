import fs from 'fs';
import path from 'path';
import { parseAPIResponse } from './parser';

export function getData(filename) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Use parseAPIResponse which handles normal JSON as well as JS objects/arrays
    const parsed = parseAPIResponse(fileContent);
    
    if (!parsed) return typeof parsed === 'object' ? parsed : [];
    return parsed;
  } catch (error) {
    console.error(`❌ getData failed for "${filename}":`, error.message);
    return null;
  }
}