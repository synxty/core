import { SUPPORTED_APPS } from '../constants';

export type SupportedApps = typeof SUPPORTED_APPS[keyof typeof SUPPORTED_APPS];

export type ProfileIconSpecs = {
  size: number;
  radius?: number;
};

export type AppSpecs = {
  [key in SupportedApps]: {
    icon: ProfileIconSpecs,
  }
};
