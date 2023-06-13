import { Color } from '../types/colors';

export const verdigris: Color = {
  DEFAULT: '#26B0BA',
  tint: {
    10: '#3CB8C1',
    20: '#51C0C8',
    30: '#67C8CF',
    40: '#7DD0D6',
    50: '#93D8DD',
    60: '#A8DFE3',
    70: '#BEE7EA',
    80: '#D4EFF1',
    90: '#E9F7F8'
  },
  shade: {
    10: '#229EA7',
    20: '#1E8D95',
    30: '#1B7B82',
    40: '#176A70',
    50: '#13585D',
    60: '#0F464A',
    70: '#0B3538',
    80: '#082325',
    90: '#041213'
  },
  toString() {
    return this.DEFAULT
  }
}
