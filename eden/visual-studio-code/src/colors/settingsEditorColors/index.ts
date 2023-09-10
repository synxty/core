import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { SettingsEditorColors } from 'types/index.ts';

const { black, white } = colors;
const { primary } = aliases;

export const settingsEditorColors: SettingsEditorColors = {
  'settings.headerForeground': white.shade[10],
  'settings.modifiedItemIndicator': primary.DEFAULT,
  'settings.dropdownListBorder': TESTING,
  'settings.checkboxForeground': primary.DEFAULT,
  'settings.rowHoverBackground': black.tint[10],
  'settings.focusedRowBackground': black.tint[10],
  'settings.focusedRowBorder': primary.DEFAULT,
  'settings.headerBorder': black.tint[10],
  'settings.sashBorder': black.tint[10],
  'settings.settingsHeaderHoverForeground': primary.DEFAULT,
};
