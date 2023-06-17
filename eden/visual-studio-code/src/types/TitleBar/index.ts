const titleBarKeys = [
  "titleBar.activeBackground",
  "titleBar.activeForeground",
  "titleBar.inactiveBackground",
  "titleBar.inactiveForeground",
  "titleBar.border"
] as const;

export type TitleBar = Partial<{ [K in typeof titleBarKeys[number]]: string }>;
