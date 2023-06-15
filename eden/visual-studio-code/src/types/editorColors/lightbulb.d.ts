const lightBulbKeys = [
  "editorLightBulb.foreground",
  "editorLightBulbAutoFix.foreground"
] as const;

export type LightBulb = Partial<{ [K in typeof lightBulbKeys[number]]: string }>;
