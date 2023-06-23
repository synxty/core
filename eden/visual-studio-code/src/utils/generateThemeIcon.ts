import { convertIconToPNG } from '@synxty/assets-manager';
import { EdenIcon } from '@synxty/brand-assets';
import { ICON_THEME } from 'constants/index.ts';

convertIconToPNG(EdenIcon, {
  appName: 'vscode',
  outputFilename: {
    filename: 'icon'
  },
  theme: ICON_THEME
});
