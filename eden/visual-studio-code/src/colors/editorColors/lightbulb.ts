import { aliases } from '@synxty/design-tokens';
import { LightBulb } from 'types/index.ts';

const { amber, chartreuse } = aliases;

export const lightbulb: LightBulb = {
  'editorLightBulb.foreground': amber.DEFAULT,
  'editorLightBulbAutoFix.foreground': chartreuse.DEFAULT,
};
