import { supportedApps } from '../apps/supportedApps';
import { supportedThemes } from '../themes/supportedThemes';

export type SupportedApps = typeof supportedApps[keyof typeof supportedApps];
export type SupportedThemes = typeof supportedThemes[keyof typeof supportedThemes];

export type AppIconConfig = {
  size: number;
  radius?: number;
};

export type ThemeConfig = {
  backgroundColor: string;
}

export type AppsIdentity = {
  [key in SupportedApps]: {
    icon: AppIconConfig,
  }
};

export type Themes = {
  [key in SupportedThemes]: ThemeConfig
};
