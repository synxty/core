import { supportedApps } from '../constants';

export type SupportedApps = typeof supportedApps[keyof typeof supportedApps];

export type ProfileIconSpecs = {
  size: number;
  radius?: number;
};

export type AppSpecs = {
  [key in SupportedApps]: {
    icon: ProfileIconSpecs,
  }
};
