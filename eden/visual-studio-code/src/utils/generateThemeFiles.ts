import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import source from 'index.ts';
import { DARK_THEME_PATH, THEMES_DIRECTORY } from 'constants/index.ts';

export default function () {
  if (!existsSync(THEMES_DIRECTORY)) mkdirSync(THEMES_DIRECTORY);
  
  writeFileSync(DARK_THEME_PATH, JSON.stringify(source, null, 2));
};
