import { convertIconToPNG } from '@synxty/assets-manager';
import { EdenIcon } from '@synxty/brand-assets';
import { ICON_THEME } from '../constants';

convertIconToPNG(EdenIcon, {
  appName: 'vscode',
  outputName: 'eden-icon',
  theme: ICON_THEME
})
