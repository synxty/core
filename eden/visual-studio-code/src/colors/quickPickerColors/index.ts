import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { QuickPickerColors } from 'types/index.ts';

const { black, white } = colors;
const { primary, secondary } = aliases;

export const quickPickerColors: QuickPickerColors = {
  'pickerGroup.border': black.tint[10],
  'pickerGroup.foreground': secondary.DEFAULT,
  'quickInput.background': black.tint[30],
  'quickInput.foreground': white.shade[70],
  'quickInputList.focusBackground': primary.DEFAULT,
  'quickInputList.focusForeground': black.tint[10],
  'quickInputList.focusIconForeground': white.shade[10],
  'quickInputTitle.background': TESTING,
};
