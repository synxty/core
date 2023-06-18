import chalk from 'chalk';
import generateThemeFiles from './generateThemeFiles';
import { aliases, colors } from '@synxty/design-tokens';
import path from 'node:path';
import { DARK_THEME_PATH } from '../constants';

const { amber, info, success} = aliases;
const { black } = colors;

console.log(chalk.bgHex(amber.DEFAULT).hex(black.tint[30]).bold(' > Build started \n'));
console.log(chalk.bold('Writing file to:'), chalk.hex(info.DEFAULT).underline(`${path.resolve(DARK_THEME_PATH)}\n`));

generateThemeFiles();

console.log(chalk.bgHex(success.DEFAULT).hex(black.tint[30]).bold(' > Done! '));
