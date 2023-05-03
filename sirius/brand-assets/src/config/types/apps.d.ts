import { supportedApps } from '../apps/supportedApps';

export type SupportedApps = typeof supportedApps[keyof typeof supportedApps];

export type AppIconConfig = {
  size: number;
  radius?: number;
};

export type AppsIdentity = {
  [key in SupportedApps]: {
    icon: AppIconConfig,
  }
};
