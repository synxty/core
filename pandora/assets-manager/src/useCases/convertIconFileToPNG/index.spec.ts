import { afterAll, describe, expect, it } from 'vitest';
import { convertIconFileToPNG } from '.';
import { statSync, unlinkSync } from 'fs';

const SAMPLE_ICON_PATH = 'samples/SynxtyIcon.svg';
const TEST_RESULT_PATH = `${__dirname}/test-github-profile-dark.png`;

describe('> Convert icon file to PNG', () => {
  it('should convert a SVG icon to a PNG image for the given platform with the given theme', async () => {
    await convertIconFileToPNG(
      SAMPLE_ICON_PATH,
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