# Assets Manager

> Manage Synxty assets like icons, logos and banners with Pandora's Assets Manager features.

## ⚙️ Install

Install it locally in your project folder as a dev dependency:

### pnpm

```bash
pnpm add @synxty/assets-manager -D
```

## 📖 API Reference

### Convert SVG Icon files to PNG

```typescript
import { convertIconFileToPNG } from '@synxty/assets-manager';

convertIconFileToPNG(
  iconPath, 
  {
    outputName: 'icon',
    platform: 'github-profile',
    theme: 'dark'
  },
  outDir
);
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `iconPath` | `string` | **Required**. Path to the svg icon to convert. |
| `settings` | `PNGSettings` | **Required**. Settings to specify the desired outcome. Head down to [Interfaces](#interfaces)|
| `outDir` | `string` | **Optional**. Path to store the converted file. Defaults to the current directory. |

### Convert SVG String to PNG

```typescript
import { convertIconStringToPNG } from '@synxty/assets-manager';

convertIconStringToPNG(
  iconString, 
  {
    outputName: 'icon',
    platform: 'github-profile',
    theme: 'dark'
  },
  outDir
);
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `iconString` | `string` | **Required**. Icon as a SVG string to convert. |
| `settings` | `PNGSettings` | **Required**. Settings to specify the desired outcome. Head down to [Interfaces](#interfaces) |
| `outDir` | `string` | **Optional**. Path to store the converted file. Defaults to the current directory. |

### Interfaces

#### PNG Settings

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `outputName` | `string` | **Required**. Name of the output PNG file. |
| `platform` | `Platforms` | **Required**. Platform desired to display the icon. Check [@synxty/platforms-assets-config](https://github.com/synxty/sirius/pkgs/npm/platforms-assets-config) for all supported platforms |
| `theme` | `Themes` | **Required**. This will set the background for the icon. Currently the supported themes are `dark` and `light` |

## ⚖️ License

This package is open source software [licensed as MIT](LICENSE).

---
Thank you, made with 💗 by [&copy; Synxty](https://github.com/synxty).
