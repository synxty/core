import { convertIconToPNG } from '@synxty/assets-manager';
import { EdenIcon } from '@synxty/brand-assets';

convertIconToPNG(EdenIcon, {
  appName: 'vscode',
  outputName: 'icon',
  theme: 'light'
})
