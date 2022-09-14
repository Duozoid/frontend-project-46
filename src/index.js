import fs from 'fs';
import path from 'path';
import compareData from './compareData.js'
import diff from './formatters/stylish.js';

const readFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(readFilePath(filepath), 'utf-8');
const parse = (file) => JSON.parse(file);

const genDiff = (file1, file2) => {
  const data1 = readFile(file1);
  const data2 = readFile(file2);
  const parsed1 = parse(data1); 
  const parsed2 = parse(data2);
  const data = compareData(parsed1, parsed2);

  return diff(data);
};

export default genDiff;