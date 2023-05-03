import { SupportedThemes, ThemeConfig, Themes } from '../types';
import { themes } from './themes';

export { supportedThemes } from './supportedThemes';

export function getThemeConfig(theme: SupportedThemes): ThemeConfig {
  return themes[theme];
};
