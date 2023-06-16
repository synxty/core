const sideBarKeys = [
  "sideBar.background",
  "sideBar.foreground",
  "sideBar.border",
  "sideBar.dropBackground",
  "sideBarTitle.foreground",
  "sideBarSectionHeader.background",
  "sideBarSectionHeader.foreground",
  "sideBarSectionHeader.border"
] as const;

export type SideBar = Partial<{ [K in typeof sideBarKeys[number]]: string }>;
