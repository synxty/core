import { ParseThemeColors } from 'types/index.ts';

const minimapProps = [
  'minimap.findMatchHighlight',
  'minimap.selectionHighlight',
  'minimap.errorHighlight',
  'minimap.warningHighlight',
  'minimap.background',
  'minimap.selectionOccurrenceHighlight',
  'minimap.foregroundOpacity',
  'minimapSlider.background',
  'minimapSlider.hoverBackground',
  'minimapSlider.activeBackground',
  'minimapGutter.addedBackground',
  'minimapGutter.modifiedBackground',
  'minimapGutter.deletedBackground',
] as const;

export type Minimap = ParseThemeColors<typeof minimapProps>;
