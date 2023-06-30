import { aliases, colors } from '@synxty/design-tokens';
import { Minimap } from 'types/index.ts';

const { black } = colors;
const { primary, danger, warning, success, info } = aliases;

export const minimap: Minimap = {
  'minimap.findMatchHighlight': primary.DEFAULT,
  'minimap.selectionHighlight': primary.DEFAULT,
  'minimap.errorHighlight': danger.DEFAULT,
  'minimap.warningHighlight': warning.DEFAULT,
  'minimap.background': black.tint[20],
  'minimap.selectionOccurrenceHighlight': primary.DEFAULT,
  //'minimap.foregroundOpacity': '#000000FF',
  'minimapSlider.background': `${black.tint[70]}40`,
  'minimapSlider.hoverBackground': `${black.tint[70]}40`,
  'minimapSlider.activeBackground': `${black.tint[50]}40`,
  'minimapGutter.addedBackground': success.DEFAULT,
  'minimapGutter.modifiedBackground': info.DEFAULT,
  'minimapGutter.deletedBackground': danger.DEFAULT,
};
