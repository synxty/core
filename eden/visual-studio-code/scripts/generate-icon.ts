import { convertIconToPNG } from '@synxty/assets-manager';
import { EdenIcon } from '@synxty/brand-assets';

convertIconToPNG(EdenIcon, {
  appName: 'vscode',
  outputName: 'eden-icon',
  theme: 'dark'
})
