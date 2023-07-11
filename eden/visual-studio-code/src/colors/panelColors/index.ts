import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { PanelColors } from 'types/index.ts';

const { black, white } = colors;
const { primary } = aliases;

export const panelColors: PanelColors = {
  'panel.background': black.tint[20],
  'panel.border': black.tint[10],
  'panel.dropBorder': primary.DEFAULT,
  'panelTitle.activeBorder': primary.DEFAULT,
  'panelTitle.activeForeground': white.shade[10],
  'panelTitle.inactiveForeground': white.shade[120],
  'panelInput.border': black.tint[10],
  'panelSection.border': primary.DEFAULT,
  'panelSection.dropBackground': `${black.tint[30]}BF`,
  'panelSectionHeader.background': black.tint[30],
  'panelSectionHeader.foreground': white.shade[10],
  'panelSectionHeader.border': TESTING,
};
