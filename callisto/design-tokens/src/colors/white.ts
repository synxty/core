import { createShadedNeutralColor } from 'utils/create-neutral-color.ts';

export const white = createShadedNeutralColor({
  DEFAULT: '#FFFFFF',
  shade: {
    10: '#F7F7F7',
    20: '#EEEEEE',
    30: '#E6E6E6',
    40: '#DDDDDD',
    50: '#D5D5D5',
    60: '#CCCCCC',
    70: '#C4C4C4',
    80: '#BBBBBB',
    90: '#B3B3B3',
    100: '#AAAAAA',
    110: '#999999',
    120: '#888888',
  },
});
