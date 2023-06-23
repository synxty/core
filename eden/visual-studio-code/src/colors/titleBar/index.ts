import { colors } from '@synxty/design-tokens';
import { TitleBar } from 'types/index.ts';

const { black } = colors;

export const titleBar: TitleBar = {
  "titleBar.activeBackground": black.tint[20],
  "titleBar.activeForeground": black.tint[120],
  "titleBar.inactiveBackground": black.tint[20],
  "titleBar.inactiveForeground": black.tint[90],
  "titleBar.border": black.tint[20]
};
