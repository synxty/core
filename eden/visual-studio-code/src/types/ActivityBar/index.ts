import { ParseThemeKeys } from 'types/index.ts';

const activityBarProps = [
  'activityBar.background',
  'activityBar.dropBorder',
  'activityBar.foreground',
  'activityBar.inactiveForeground',
  'activityBar.border',
  'activityBarBadge.background',
  'activityBarBadge.foreground',
  'activityBar.activeBorder',
  'activityBar.activeBackground',
  'activityBar.activeFocusBorder',
] as const;

export type ActivityBar = ParseThemeKeys<typeof activityBarProps>;
