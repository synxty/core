import { ParseThemeColors } from 'types/index.ts';

const sideBarProps = [
  "sideBar.background",
  "sideBar.foreground",
  "sideBar.border",
  "sideBar.dropBackground",
  "sideBarTitle.foreground",
  "sideBarSectionHeader.background",
  "sideBarSectionHeader.foreground",
  "sideBarSectionHeader.border"
] as const;

export type SideBar = ParseThemeColors<typeof sideBarProps>;
