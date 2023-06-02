import { Aliases } from '../types/colors';
import { bittersweet } from './bittersweet';
import { black } from './black';
import { crayola } from './crayola';
import { dodger } from './dodger';
import { emerald } from './emerald';
import { grape } from './grape';
import { iris } from './iris';
import { jasmine } from './jasmine';
import { mindaro } from './mindaro';
import { mulberry } from './mulberry';
import { sandy } from './sandy';
import { verdigris } from './verdigris';
import { white } from './white';
import { xanthous } from './xanthous';

export const colors = {
  bittersweet,
  black,
  crayola,
  dodger,
  emerald,
  grape,
  iris,
  jasmine,
  mindaro,
  mulberry,
  sandy,
  verdigris,
  white,
  xanthous,
};

export const aliases: Aliases = {
  red: bittersweet,
  vermilion: crayola,
  orange: sandy,
  amber: xanthous,
  yellow: jasmine,
  chartreuse: mindaro,
  green: emerald,
  teal: verdigris,
  blue: dodger,
  violet: iris,
  purple: grape,
  magenta: mulberry,
  primary: jasmine,
  secondary: sandy,
  success: emerald,
  info: dodger,
  warning: crayola,
  danger: bittersweet,
};
