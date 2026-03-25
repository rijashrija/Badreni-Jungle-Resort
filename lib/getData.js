import fs from 'fs';
import path from 'path';

export function getData(filename) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(fileContent);
    if (!parsed) return [];
    return parsed;
  } catch (error) {
    console.error(`❌ getData failed for "${filename}":`, error.message);
    return [];
  }
}