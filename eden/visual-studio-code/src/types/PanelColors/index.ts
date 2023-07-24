import { ParseThemeKeys } from 'types/index.ts';

const panelColorsProps = [
  'panel.background',
  'panel.border',
  'panel.dropBorder',
  'panelTitle.activeBorder',
  'panelTitle.activeForeground',
  'panelTitle.inactiveForeground',
  'panelInput.border',
  'panelSection.border',
  'panelSection.dropBackground',
  'panelSectionHeader.background',
  'panelSectionHeader.foreground',
  'panelSectionHeader.border',
] as const;

export type PanelColors = ParseThemeKeys<typeof panelColorsProps>;
