import { ParseThemeColors } from 'types/index.ts';

const quickPickerColorsProps = [
  'pickerGroup.border',
  'pickerGroup.foreground',
  'quickInput.background',
  'quickInput.foreground',
  'quickInputList.focusBackground',
  'quickInputList.focusForeground',
  'quickInputList.focusIconForeground',
  'quickInputTitle.background',
] as const;

export type QuickPickerColors = ParseThemeColors<typeof quickPickerColorsProps>;
