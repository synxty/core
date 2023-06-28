import { aliases, colors } from '@synxty/design-tokens';
import { Badge } from 'types/index.ts';

const { black } = colors;
const { primary } = aliases;

export const badge: Badge = {
  'badge.background': primary.DEFAULT,
  'badge.foreground': black.tint[70],
};
