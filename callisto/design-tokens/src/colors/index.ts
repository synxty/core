import { Aliases } from 'types/index.ts';
import { bittersweet } from './bittersweet.ts';
import { black } from './black.ts';
import { crayola } from './crayola.ts';
import { dodger } from './dodger.ts';
import { emerald } from './emerald.ts';
import { grape } from './grape.ts';
import { iris } from './iris.ts';
import { jasmine } from './jasmine.ts';
import { mindaro } from './mindaro.ts';
import { mulberry } from './mulberry.ts';
import { sandy } from './sandy.ts';
import { verdigris } from './verdigris.ts';
import { white } from './white.ts';
import { xanthous } from './xanthous.ts';

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
  primary: xanthous,
  secondary: jasmine,
  tertiary: sandy,
  success: emerald,
  info: dodger,
  warning: crayola,
  danger: bittersweet,
};
