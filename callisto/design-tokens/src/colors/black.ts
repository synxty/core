import { createTintedNeutralColor } from '../utils/create-neutral-color';

export const black = createTintedNeutralColor(
  {
    DEFAULT: '#000000',
    tint: {
      10: '#080808',
      20: '#111111',
      30: '#191919',
      40: '#222222',
      50: '#2B2B2B',
      60: '#333333',
      70: '#3B3B3B',
      80: '#444444',
      90: '#4D4D4D',
      100: '#555555',
      110: '#666666',
      120: '#777777'
    },
  }
);
