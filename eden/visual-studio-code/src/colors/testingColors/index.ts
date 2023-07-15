import { aliases, colors } from '@synxty/design-tokens';
import { TESTING } from 'constants/index.ts';
import { ActivityBar, TestingColors } from 'types/index.ts';

const { black } = colors;
const { primary } = aliases;

export const testingColors: TestingColors = {
  'testing.iconFailed': TESTING,
  'testing.iconErrored': TESTING,
  'testing.iconPassed': TESTING,
  'testing.runAction': TESTING,
  'testing.iconQueued': TESTING,
  'testing.iconUnset': TESTING,
  'testing.iconSkipped': TESTING,
  'testing.peekBorder': TESTING,
  'testing.peekHeaderBackground': TESTING,
  'testing.message.error.decorationForeground': TESTING,
  'testing.message.error.lineBackground': TESTING,
  'testing.message.info.decorationForeground': TESTING,
  'testing.message.info.lineBackground': TESTING,
};
