import { Color } from '../types/colors';

export const jasmine: Color = {
  DEFAULT: '#FCE393',
  tint: {
    10: '#FCE69E',
    20: '#FDE9A9',
    30: '#FDEBB3',
    40: '#FDEEBE',
    50: '#FEF1C9',
    60: '#FEF4D4',
    70: '#FEF7DF',
    80: '#FEF9E9',
    90: '#FFFCF4'
  },
  shade: {
    10: '#E3CC84',
    20: '#CAB676',
    30: '#B09F67',
    40: '#978858',
    50: '#7E724A',
    60: '#655B3B',
    70: '#4C442C',
    80: '#322D1D',
    90: '#19170F'
  },
  toString() {
    return this.DEFAULT
  }
}
