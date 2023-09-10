import { ParseThemeKeys } from 'types/index.ts';

const titleBarProps = [
  'titleBar.activeBackground',
  'titleBar.activeForeground',
  'titleBar.inactiveBackground',
  'titleBar.inactiveForeground',
  'titleBar.border',
] as const;

export type TitleBar = ParseThemeKeys<typeof titleBarProps>;
