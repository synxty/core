import { colors } from '@synxty/design-tokens';
import { Tabs } from '../../types';
import { TESTING } from '../../constants';

const { black, white } = colors;

export const tabs: Tabs = {
  "tab.activeBackground": black.tint[20],
  "tab.unfocusedActiveBackground": black.tint[20],
  "tab.activeForeground": white.shade[10],
  "tab.border": black.tint[30],
  "tab.activeBorder": black.tint[20],
  "tab.unfocusedActiveBorder": black.tint[20],
  "tab.activeBorderTop": black.tint[20],
  "tab.unfocusedActiveBorderTop": black.tint[20],
  "tab.lastPinnedBorder": black.tint[30],
  "tab.inactiveBackground": black.tint[30],
  "tab.unfocusedInactiveBackground": black.tint[30],
  "tab.inactiveForeground": black.tint[120],
  "tab.unfocusedActiveForeground": black.tint[120],
  "tab.unfocusedInactiveForeground": black.tint[90],
  //"tab.hoverBorder": primary.DEFAULT,
  //"tab.hoverBackground": TESTING,
  "tab.hoverForeground": white.shade[10],
  //"tab.unfocusedHoverBorder": primary.DEFAULT,
  //"tab.unfocusedHoverBackground": TESTING,
  "tab.unfocusedHoverForeground": white.shade[10],
  "tab.activeModifiedBorder": TESTING,
  "tab.inactiveModifiedBorder": TESTING,
  "tab.unfocusedActiveModifiedBorder": TESTING,
  "tab.unfocusedInactiveModifiedBorder": TESTING,
};
