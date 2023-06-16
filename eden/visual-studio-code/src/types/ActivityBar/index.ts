const activityBarKeys = [
  "activityBar.background",
  "activityBar.dropBorder",
  "activityBar.foreground",
  "activityBar.inactiveForeground",
  "activityBar.border",
  "activityBarBadge.background",
  "activityBarBadge.foreground",
  "activityBar.activeBorder",
  "activityBar.activeBackground",
  "activityBar.activeFocusBorder"
] as const;

export type ActivityBar = Partial<{ [K in typeof activityBarKeys[number]]: string }>;
