import { aliases } from '@synxty/design-tokens';
import { LightBulb } from 'types/index.ts';

const { secondary, chartreuse } = aliases;

export const lightbulb: LightBulb = {
  'editorLightBulb.foreground': secondary.DEFAULT,
  'editorLightBulbAutoFix.foreground': chartreuse.DEFAULT,
};
