import { afterAll, describe, expect, it } from 'vitest';
import { SynxtyIcon } from '@synxty/brand-assets';
import { convertIconStringToPNG } from '.';
import { statSync, unlinkSync } from 'fs';
import { TEST_RESULT_APP_NAME, TEST_RESULT_FILE_NAME } from '../../constants';

describe('> Convert icon string to PNG', () => {
  it('should convert a SVG string to a PNG image for the given platform with the given theme', async () => {
    await convertIconStringToPNG(
      SynxtyIcon,
      {
        outputName: 'test',
        appName: TEST_RESULT_APP_NAME,
        theme: 'dark'
      },
      __dirname
    );
    expect(statSync(`${__dirname}/${TEST_RESULT_FILE_NAME}`)).toBeDefined();
  });

  afterAll(() => {
    unlinkSync(`${__dirname}/${TEST_RESULT_FILE_NAME}`);
  });
  
});