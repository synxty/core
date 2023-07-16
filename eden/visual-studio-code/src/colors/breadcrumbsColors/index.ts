import { aliases, colors } from '@synxty/design-tokens';
import { BreadcrumbsColors } from 'types/index.ts';

const { black, white } = colors;
const { primary } = aliases;

export const breadcrumbsColors: BreadcrumbsColors = {
  'breadcrumb.foreground': white.shade[50],
  'breadcrumb.background': black.tint[20],
  'breadcrumb.focusForeground': primary.DEFAULT,
  'breadcrumb.activeSelectionForeground': primary.DEFAULT,
  'breadcrumbPicker.background': black.tint[30],
};
