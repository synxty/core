# Assets Manager

> Manage Synxty assets like icons, logos and banners with Pandora's Assets Manager features.

## ⚙️ Install

```bash
pnpm add @synxty/assets-manager -D
```

## 📖 API Reference

### Convert Synxty icons to PNG

```typescript
// example

import { convertIconToPNG } from '@synxty/assets-manager';

convertIconToPNG(
  iconPath, 
  {
    outputName: 'profile-icon',
    appName: 'github',
    theme: 'dark'
  },
  outDir
);
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `iconPath` | `string` | **Required**. Path to the svg icon to convert. |
| `specs` | `PNGSpecs` | **Required**. Options to convert the icon. Head down to [Interfaces](#interfaces) for more details.|
| `outDir` | `string` | **Optional**. Path to store the converted file. Defaults to the current directory. |

### Interfaces

#### `PNGSpecs`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `outputName` | `string` | **Required**. Name of the output PNG file. |
| `appName` | `SupportedApps` | **Required**. App where the icon is going to be displayed. Check [@synxty/brand-assets](https://github.com/synxty/core/tree/main/sirius/brand-assets#supported-apps) for all supported apps. |
| `theme` | `SupportedThemes` | **Required**. This will set the background for the icon. Currently the supported themes are `dark` and `light`. |

## ⚖️ License

This package is open source software [licensed as MIT](LICENSE).

---
Thank you, made with 💗 by [&copy; Synxty](https://github.com/synxty).
