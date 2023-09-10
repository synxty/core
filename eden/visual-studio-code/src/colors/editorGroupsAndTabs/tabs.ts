import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { Tabs } from 'types/index.ts';

const { black, white } = colors;
const { primary } = aliases;

export const tabs: Tabs = {
  'tab.activeBackground': black.tint[20],
  'tab.unfocusedActiveBackground': black.tint[20],
  'tab.activeForeground': white.shade[10],
  'tab.border': black.tint[30],
  'tab.activeBorder': black.tint[20],
  'tab.unfocusedActiveBorder': black.tint[20],
  'tab.activeBorderTop': primary.DEFAULT,
  'tab.unfocusedActiveBorderTop': black.tint[20],
  'tab.lastPinnedBorder': black.tint[30],
  'tab.inactiveBackground': black.tint[30],
  'tab.unfocusedInactiveBackground': black.tint[30],
  'tab.inactiveForeground': black.tint[120],
  'tab.unfocusedActiveForeground': black.tint[120],
  'tab.unfocusedInactiveForeground': black.tint[90],
  'tab.hoverForeground': white.shade[10],
  'tab.unfocusedHoverForeground': white.shade[10],
  'tab.activeModifiedBorder': TESTING,
  'tab.inactiveModifiedBorder': TESTING,
  'tab.unfocusedActiveModifiedBorder': TESTING,
  'tab.unfocusedInactiveModifiedBorder': TESTING,
};
