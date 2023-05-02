import { SupportedThemes, ThemeConfig, Themes } from '../types';

const themes: Themes = {
  dark: {
    backgroundColor: "#222222"
  },
  light: {
    backgroundColor: "#F7F7F7"
  }
}

export function getThemeConfig(theme: SupportedThemes): ThemeConfig {
  return themes[theme];
};
