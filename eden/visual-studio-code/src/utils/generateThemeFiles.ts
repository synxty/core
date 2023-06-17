import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import source from '../';
import { DARK_THEME_PATH, THEMES_DIRECTORY } from '../constants';

export default function () {
  if (!existsSync(THEMES_DIRECTORY)) mkdirSync(THEMES_DIRECTORY);
  
  writeFileSync(DARK_THEME_PATH, JSON.stringify(source, null, 2));
};
