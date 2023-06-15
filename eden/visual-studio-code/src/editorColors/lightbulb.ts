import { aliases } from '@synxty/design-tokens';
import { TESTING } from '../constants';
import { LightBulb } from '../types';

const { amber } = aliases;

export const lightbulb: LightBulb = {
  "editorLightBulb.foreground": amber.DEFAULT,
  "editorLightBulbAutoFix.foreground": TESTING
};
