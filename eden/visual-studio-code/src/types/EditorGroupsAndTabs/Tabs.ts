import { ParseThemeColors } from 'types/index.ts';

const tabsProps = [
  "tab.activeBackground",
  "tab.unfocusedActiveBackground",
  "tab.activeForeground",
  "tab.border",
  "tab.activeBorder",
  "tab.unfocusedActiveBorder",
  "tab.activeBorderTop",
  "tab.unfocusedActiveBorderTop",
  "tab.lastPinnedBorder",
  "tab.inactiveBackground",
  "tab.unfocusedInactiveBackground",
  "tab.inactiveForeground",
  "tab.unfocusedActiveForeground",
  "tab.unfocusedInactiveForeground",
  "tab.hoverBackground",
  "tab.unfocusedHoverBackground",
  "tab.hoverForeground",
  "tab.unfocusedHoverForeground",
  "tab.hoverBorder",
  "tab.unfocusedHoverBorder",
  "tab.activeModifiedBorder",
  "tab.inactiveModifiedBorder",
  "tab.unfocusedActiveModifiedBorder",
  "tab.unfocusedInactiveModifiedBorder",
] as const;

export type Tabs = ParseThemeColors<typeof tabsProps>;
