import { supportedThemes } from 'apps-specs/themes/index.ts';

export type SupportedThemes = (typeof supportedThemes)[keyof typeof supportedThemes];

export type ThemeConfig = {
  backgroundColor: string;
};

export type Themes = {
  [key in SupportedThemes]: ThemeConfig;
};
