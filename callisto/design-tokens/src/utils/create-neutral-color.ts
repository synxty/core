import { NeutralColor } from '../types/colors';

type NeutralTintedColorSpecs = {
  DEFAULT: string;
  tint: NeutralColor['tint'];
}

type NeutralShadedColorSpecs = {
  DEFAULT: string;
  shade: NeutralColor['shade'];
}

export function createTintedNeutralColor( { DEFAULT, tint }: NeutralTintedColorSpecs ): Omit<NeutralColor, 'shade'>{
  return {
    DEFAULT,
    tint
  }
}

export function createShadedNeutralColor( { DEFAULT, shade }: NeutralShadedColorSpecs ): Omit<NeutralColor, 'tint'>{
  return {
    DEFAULT,
    shade
  }
}
