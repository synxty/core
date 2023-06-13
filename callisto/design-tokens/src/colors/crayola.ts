import { Color } from '../types/colors';

export const crayola: Color = {
  DEFAULT: '#FA763A',
  tint: {
    10: '#FB844E',
    20: '#FB9161',
    30: '#FC9F75',
    40: '#FCAD89',
    50: '#FDBB9D',
    60: '#FDC8B0',
    70: '#FED6C4',
    80: '#FEE4D8',
    90: '#FFF1EB'
  },
  shade: {
    10: '#E16A34',
    20: '#C85E2E',
    30: '#AF5329',
    40: '#964723',
    50: '#7D3B1D',
    60: '#642F17',
    70: '#4B2311',
    80: '#32180C',
    90: '#190C06'
  },
  toString() {
    return this.DEFAULT
  }
}
