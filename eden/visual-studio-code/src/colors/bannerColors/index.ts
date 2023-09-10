import { aliases, colors } from '@synxty/design-tokens';
import { BannerColors } from 'types/index.ts';

const { black } = colors;
const { primary } = aliases;

export const bannerColors: BannerColors = {
  'banner.background': primary.DEFAULT,
  'banner.foreground': black.tint[30],
  'banner.iconForeground': black.tint[30],
};
