import { writeFileSync } from 'node:fs';
import pkg from '../../package.json';

if (process.argv.length !== 3) {
  console.error('Please provide one argument.');
  process.exit(1);
}

const [PACKAGE_NAME]: string[] = process.argv.slice(2);

const result = {
  ...pkg,
  name: PACKAGE_NAME,
};

writeFileSync(`./package.json`, JSON.stringify(result, null, 2));
console.log('Package name changed to', PACKAGE_NAME);
