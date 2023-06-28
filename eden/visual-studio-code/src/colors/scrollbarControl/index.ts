import { colors } from '@synxty/design-tokens';
import { ScrollbarControl } from 'types/index.ts';

const { black } = colors;

export const scrollbarControl: ScrollbarControl = {
  'scrollbar.shadow': black.tint[10],
  'scrollbarSlider.activeBackground': `${black.tint[110]}40`,
  'scrollbarSlider.background': `${black.tint[70]}40`,
  'scrollbarSlider.hoverBackground': `${black.tint[110]}40`,
};
