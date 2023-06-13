import { Color } from '../types/colors';

type ColorSpecs = {
  DEFAULT: string;
  tint: Color['tint'];
  shade: Color['shade'];
}

export function createColor( { DEFAULT, tint, shade }: ColorSpecs ): Color {
  return {
    tint,
    shade,
    toString() {
      return DEFAULT;
    }
  }
}
