import { SupportedThemes, ThemeConfig } from 'apps-specs/types/index.ts';
import { themes } from './themes.ts';

export { supportedThemes } from './supportedThemes.ts';

export function getThemeConfig(theme: SupportedThemes): ThemeConfig {
  return themes[theme];
};
