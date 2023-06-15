import { writeFileSync } from 'node:fs';
import pkg from '../package.json';

const result = {
  ...pkg,
  name: 'eden-vscode'
}

writeFileSync(`./package.json`, JSON.stringify(result, null, 2));
