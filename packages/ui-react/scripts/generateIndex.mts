import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsPath = path.join(__dirname, '../components/ui');
const indexFilePath = path.join(__dirname, '../index.tsx');

const componentFiles = fs.readdirSync(componentsPath);

const exportStatements = componentFiles.map((file) => {
  const componentName = path.basename(file, '.tsx');
  return `export * from './components/ui/${componentName}';`;
});
const indexFileContent = exportStatements.join('\n') + '\n';

fs.writeFileSync(indexFilePath, indexFileContent, 'utf8');

console.log('\x1b[32m%s\x1b[0m', 'index.tsx file generated successfully.');
