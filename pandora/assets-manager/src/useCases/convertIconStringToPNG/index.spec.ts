import { afterAll, describe, expect, it } from 'vitest';
import { SynxtyIcon } from '@synxty/brand-assets';
import { convertIconStringToPNG } from '.';
import { statSync, unlinkSync } from 'fs';

const TEST_RESULT_PATH = `${__dirname}/test-github-profile-dark.png`;

describe('> Convert icon string to PNG', () => {
  it('should convert a SVG string to a PNG image for the given platform with the given theme', async () => {
    await convertIconStringToPNG(
      SynxtyIcon,
      {
        outputName: 'test',
        platform: 'github-profile',
        theme: 'dark'
      },
      __dirname
    );
    expect(statSync(TEST_RESULT_PATH)).toBeDefined();
  });

  afterAll(() => {
    unlinkSync(TEST_RESULT_PATH);
  });
  
});