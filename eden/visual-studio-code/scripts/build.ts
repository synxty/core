import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { template } from '../src/template';
import { editorColors } from '../src/editor';

const result = {
  ...template,
  colors: {
    ...editorColors
  }
}

const THEME_PATH = 'themes';

if(!existsSync(THEME_PATH)) mkdirSync(THEME_PATH);

writeFileSync(`${THEME_PATH}/eden-color-theme.json`, JSON.stringify(result, null, 2));
