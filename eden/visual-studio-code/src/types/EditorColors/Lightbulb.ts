import { ParseThemeColors } from '..';

const lightBulbProps = [
  "editorLightBulb.foreground",
  "editorLightBulbAutoFix.foreground"
] as const;

export type LightBulb = ParseThemeColors<typeof lightBulbProps>;
