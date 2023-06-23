# Assets Manager

> Manage Synxty assets like icons, logos and banners with Pandora's Assets Manager features.

## ⚙️ Install

```bash
pnpm add @synxty/assets-manager -D
```

## 📖 API Reference

### Convert Synxty icons to PNG

```typescript
import { convertIconToPNG } from '@synxty/assets-manager';

convertIconToPNG(
  iconPath,
  {
    outputFilename: 'profile-icon',
    appName: 'github',
    theme: 'dark',
  },
  outDir,
);
```

| Parameter  | Type       | Description                                                                                                        |
| :--------- | :--------- | :----------------------------------------------------------------------------------------------------------------- |
| `iconPath` | `string`   | **Required**. Path to the svg icon to convert.                                                                     |
| `specs`    | `PNGSpecs` | **Required**. Options to convert the icon. Head down to [Types & Interfaces](#types--interfaces) for more details. |
| `outDir`   | `string`   | **Optional**. Path to store the converted file. Defaults to the current directory.                                 |

### Types & Interfaces

#### `PNGSpecs`

| Property         | Type                       | Description                                                                                                                                                                                  |
| :--------------- | :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `outputFilename` | `OutputFilename \| string` | **Required**. Name of the output PNG file. Includes the `appName` and the `theme` as suffixes by default but you can but you can change it by providing an `OutputFile`.                     |
| `appName`        | `SupportedApps`            | **Required**. App where the icon is going to be displayed. Check [@synxty/brand-assets](https://github.com/synxty/core/tree/main/sirius/brand-assets#supported-apps) for all supported apps. |
| `theme`          | `SupportedThemes`          | **Required**. This will determine the background for the icon. Currently the supported themes are `dark` and `light`.                                                                        |

#### `OutputFilename`

| Property      | Type               | Description                                                  |
| :------------ | :----------------- | :----------------------------------------------------------- |
| `filename`    | `string`           | **Required**. Name of the output PNG file.                   |
| `addSuffixes` | `FilenameSuffixes` | Determines which suffixes should be added to the `filename`. |

#### `FilenameSuffixes`

| Value       | Description                              |
| :---------- | :--------------------------------------- |
| `'appName'` | Adds the `appName` to the `filename`.    |
| `'theme'`   | Adds the `theme` type to the `filename`. |

## ⚖️ License

This package is open source software [licensed as MIT](LICENSE).

---

Thank you, made with 💗 by [&copy; Synxty](https://github.com/synxty).
