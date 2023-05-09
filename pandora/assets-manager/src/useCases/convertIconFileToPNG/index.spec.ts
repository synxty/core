import { afterAll, describe, expect, it } from 'vitest';
import { convertIconFileToPNG } from '.';
import { statSync, unlinkSync } from 'fs';
import { SAMPLE_ICON_PATH, TEST_RESULT_APP_NAME, TEST_RESULT_FILE_NAME } from '../../constants';

describe('> Convert icon file to PNG', () => {
  it('should convert a SVG icon to a PNG image for the given platform with the given theme', async () => {
    await convertIconFileToPNG(
      SAMPLE_ICON_PATH,
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