import { convertIconToPNG } from '@synxty/assets-manager';
import { EdenIcon } from '@synxty/brand-assets';
import { ICON_THEME } from '../constants';

convertIconToPNG(EdenIcon, {
  appName: 'vscode',
  outputFile: {
    filename: 'icon'
  },
  theme: ICON_THEME
})
