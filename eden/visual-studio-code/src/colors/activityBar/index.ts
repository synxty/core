import { aliases, colors } from '@synxty/design-tokens';
import { ActivityBar } from 'types/index.ts';

const { black } = colors;
const { primary, secondary } = aliases;

export const activityBar: ActivityBar = {
  'activityBar.background': black.tint[20],
  'activityBar.dropBorder': primary.DEFAULT,
  'activityBar.foreground': primary.DEFAULT,
  'activityBar.inactiveForeground': black.tint[90],
  'activityBarBadge.background': primary.DEFAULT,
  'activityBarBadge.foreground': black.tint[30],
  'activityBar.activeBorder': primary.DEFAULT,
  'activityBar.activeBackground': black.tint[30],
  'activityBar.activeFocusBorder': secondary.DEFAULT,
};
