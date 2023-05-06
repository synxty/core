import { supportedThemes } from '../themes/supportedThemes';

export type SupportedThemes = typeof supportedThemes[keyof typeof supportedThemes];

export type ThemeConfig = {
  backgroundColor: string;
}

export type Themes = {
  [key in SupportedThemes]: ThemeConfig
};
