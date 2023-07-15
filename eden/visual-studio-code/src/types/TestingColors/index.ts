import { ParseThemeColors } from 'types/index.ts';

const testingColorsProps = [
  'testing.iconFailed',
  'testing.iconErrored',
  'testing.iconPassed',
  'testing.runAction',
  'testing.iconQueued',
  'testing.iconUnset',
  'testing.iconSkipped',
  'testing.peekBorder',
  'testing.peekHeaderBackground',
  'testing.message.error.decorationForeground',
  'testing.message.error.lineBackground',
  'testing.message.info.decorationForeground',
  'testing.message.info.lineBackground',
] as const;

export type TestingColors = ParseThemeColors<typeof testingColorsProps>;
