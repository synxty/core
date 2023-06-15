import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { template } from '../src/template';
import { editorColors } from '../src/editorColors';

const result = {
  ...template,
  colors: {
    ...editorColors
  }
}

const THEME_DIRECTORY = 'themes';
const THEME_FILE_NAME = 'eden-color-theme.json';
const THEME_PATH = `${THEME_DIRECTORY}/${THEME_FILE_NAME}`

if (!existsSync(THEME_DIRECTORY)) mkdirSync(THEME_DIRECTORY);

writeFileSync(THEME_PATH, JSON.stringify(result, null, 2));
console.log('Theme file written to', THEME_PATH)
