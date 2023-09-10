import { ParseThemeKeys } from 'types/index.ts';

const lightBulbProps = ['editorLightBulb.foreground', 'editorLightBulbAutoFix.foreground'] as const;

export type LightBulb = ParseThemeKeys<typeof lightBulbProps>;
