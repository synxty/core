import { ParseThemeColors } from '..';

const titleBarProps = [
  "titleBar.activeBackground",
  "titleBar.activeForeground",
  "titleBar.inactiveBackground",
  "titleBar.inactiveForeground",
  "titleBar.border"
] as const;

export type TitleBar = ParseThemeColors<typeof titleBarProps>;
