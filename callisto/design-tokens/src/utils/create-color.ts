import { Color } from 'types/index.ts';

type ColorSpecs = {
  DEFAULT: string;
  tint: Color['tint'];
  shade: Color['shade'];
}

export function createColor( { DEFAULT, tint, shade }: ColorSpecs ): Color {
  return {
    DEFAULT,
    tint,
    shade,
  }
}
