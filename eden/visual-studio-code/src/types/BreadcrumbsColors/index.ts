import { ParseThemeColors } from 'types/index.ts';

const breadcrumbsColorsProps = [
  'breadcrumb.foreground',
  'breadcrumb.background',
  'breadcrumb.focusForeground',
  'breadcrumb.activeSelectionForeground',
  'breadcrumbPicker.background',
] as const;

export type BreadcrumbsColors = ParseThemeColors<typeof breadcrumbsColorsProps>;
