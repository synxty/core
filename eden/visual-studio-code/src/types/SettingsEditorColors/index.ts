import { ParseThemeKeys } from 'types/index.ts';

const settingsEditorColorsProps = [
  'settings.headerForeground',
  'settings.modifiedItemIndicator',
  'settings.dropdownBackground',
  'settings.dropdownForeground',
  'settings.dropdownBorder',
  'settings.dropdownListBorder',
  'settings.checkboxBackground',
  'settings.checkboxForeground',
  'settings.checkboxBorder',
  'settings.rowHoverBackground',
  'settings.textInputBackground',
  'settings.textInputForeground',
  'settings.textInputBorder',
  'settings.numberInputBackground',
  'settings.numberInputForeground',
  'settings.numberInputBorder',
  'settings.focusedRowBackground',
  'settings.focusedRowBorder',
  'settings.headerBorder',
  'settings.sashBorder',
  'settings.settingsHeaderHoverForeground',
] as const;

export type SettingsEditorColors = ParseThemeKeys<typeof settingsEditorColorsProps>;
