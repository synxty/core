import { colors, aliases } from '@synxty/design-tokens';
import chalk from 'chalk';
import { existsSync, readFileSync } from 'node:fs';
import generateThemeFiles from './generateThemeFiles.ts';
import { getObjectDifferences } from './getObjectDifferences.ts';
import path from 'node:path';
import { THEMES_DIRECTORY, DARK_THEME_PATH } from 'constants/index.ts';

const { amber, info, success } = aliases;
const { black, white } = colors;

if (!existsSync(THEMES_DIRECTORY)) {
  generateThemeFiles();
};

const previousData = JSON.parse(readFileSync(DARK_THEME_PATH, 'utf-8'));

generateThemeFiles();

const newData = JSON.parse(readFileSync(DARK_THEME_PATH, 'utf-8'));

const changes = getObjectDifferences(previousData, newData);

const consoleOutput = changes 
? `${chalk.hex(success.DEFAULT)('New changes found!\n\n')}${JSON.stringify(changes, null, 2)}\n`
: chalk.hex(white.shade[120])('No changes found.\n')

console.log(chalk.bgHex(amber.DEFAULT).hex(black.tint[30]).bold(' > Running in development mode \n'));
console.log(chalk.bold('Watching file:'), chalk.hex(info.DEFAULT).underline(`${path.resolve(DARK_THEME_PATH)}\n`));
console.log(consoleOutput);
