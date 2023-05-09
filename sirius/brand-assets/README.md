# Brand Assets

> Use Synxty assets like icons, logos and banners in your projects and products.

## ⚙️ Install

Install it locally in your project folder:

```bash
pnpm add @synxty/brand-assets
```

## 📖 API Reference

### Use Synxty assets as SVG strings

```typescript
import { SynxtyIcon } from '@synxty/brand-assets';

console.log(SynxtyIcon) // <svg>...</svg>
```

### Get apps Profile Icon specs

```typescript
import { getProfileIconSpecs, ProfileIconSpecs } from '@synxty/brand-assets/apps-specs';

const profileIconSpecs: ProfileIconSpecs = getProfileIconSpecs(appName);
```

| Parameter | Type            | Description                                                                                        |
| :-------- | :-------------- | :------------------------------------------------------------------------------------------------- |
| `appName` | `SupportedApps` | **Required**. There's a set of [supported apps](#supported-apps) to Synxty assets that you can use.|

### Supported Apps

Currently you can get specifications for Synxty assets for the following apps:

| `SupportedApps` | Profile     | Banners    | Posts      |
| :-------------  | :-------:   | :--------: | :--------: |
| Discord         | &check;     |            |            |
| Facebook        | &check;     |            |            |
| GitHub          | &check;     |            |            |
| Instagram       | &check;     |            |            |
| LinkedIn        | &check;     |            |            |
| Twitch          | &check;     |            |            |
| Twitter         | &check;     |            |            |
| VS Code         | &check;     |            |            |
| YouTube         | &check;     |            |            |

### Types & Interfaces

#### `ProfileIconSpecs`

| Parameter | Type     | Description                                                                      |
| :-------- | :------- | :------------------------------------------------------------------------------- |
| `size`    | `number` | **Required**. Size in **px** of the profile icon for an app.                     |
| `radius`  | `number` | Border radius in **%**. Some apps support different border radius for the icon.  |

## ⚖️ License

This package is open source software [licensed as MIT](LICENSE).

---
Thank you, made with 💗 by [&copy; Synxty](https://github.com/synxty).
