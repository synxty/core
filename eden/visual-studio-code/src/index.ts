import colors from 'colors/index.ts';
import tokenColors from 'token-colors/index.ts';
import { Theme } from 'types/index.ts';

const theme: Theme = {
  $schema: 'vscode://schemas/color-theme',
  name: 'Eden',
  colors,
  tokenColors,
};

export default theme;
