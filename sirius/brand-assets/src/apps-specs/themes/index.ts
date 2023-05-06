import { SupportedThemes, ThemeConfig } from '../types';
import { themes } from './themes';

export { supportedThemes } from './supportedThemes';

export function getThemeConfig(theme: SupportedThemes): ThemeConfig {
  return themes[theme];
};
