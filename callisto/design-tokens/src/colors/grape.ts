import { Color } from '../types/colors';

export const grape: Color = {
  DEFAULT: '#7541B4',
  tint: {
    10: '#8354BC',
    20: '#9167C3',
    30: '#9E7ACB',
    40: '#AC8DD2',
    50: '#BAA0DA',
    60: '#C8B3E1',
    70: '#D6C6E9',
    80: '#E3D9F0',
    90: '#F1ECF8'
  },
  shade: {
    10: '#693BA2',
    20: '#5E3490',
    30: '#522E7E',
    40: '#46276C',
    50: '#3B215A',
    60: '#2F1A48',
    70: '#231336',
    80: '#170D24',
    90: '#0C0612'
  },
  toString() {
    return this.DEFAULT
  }
}
