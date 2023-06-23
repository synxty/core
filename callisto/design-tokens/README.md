# Design Tokens

> Centralize and streamline your UI components, libraries or themes with essential design elements like colors, typography, and spacing.

## ⚙️ Install

```bash
pnpm add @synxty/design-tokens
```

## 🎨 Colors

| Name        | Aliases            | Hex       | RGB           | HSL              | 🖍️                                                                                                             |
| :---------- | :----------------- | --------- | ------------- | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| Bittersweet | Red, Danger        | `#F4413E` | `244 65  62`  | `1°   89%  60%`  | ![bittersweet](https://github.com/synxty/core/blob/main/callisto/design-tokens/.github/assets/bittersweet.svg) |
| Crayola     | Vermilion, Warning | `#FA763A` | `250 118 58`  | `19°  95%  60%`  | ![crayola](https://github.com/synxty/core/blob/main/callisto/design-tokens/.github/assets/crayola.svg)         |
| Sandy       | Orange, Secondary  | `#FFA337` | `255 163 55`  | `32°  100% 61%`  | ![sandy](https://github.com/synxty/core/blob/main/callisto/design-tokens/.github/assets/sandy.svg)             |
| Xanthous    | Amber              | `#FEC365` | `254 195 101` | `37°  99%  70%`  | ![xanthous](https://github.com/synxty/core/blob/main/callisto/design-tokens/.github/assets/xanthous.svg)       |
| Jasmine     | Yellow, Primary    | `#FCE393` | `252 227 147` | `46°  95%  78%`  | ![jasmine](https://github.com/synxty/core/blob/main/callisto/design-tokens/.github/assets/jasmine.svg)         |
| Mindaro     | Chartreuse         | `#C1DC86` | `193 220 134` | `79°  55%  69%`  | ![mindaro](https://github.com/synxty/core/blob/main/callisto/design-tokens/.github/assets/mindaro.svg)         |
| Emerald     | Green, Success     | `#23C865` | `35  200 101` | `144° 70%  46%`  | ![emerald](https://github.com/synxty/core/blob/main/callisto/design-tokens/.github/assets/emerald.svg)         |
| Verdigris   | Teal               | `#26B0BA` | `38  176 186` | `184° 66%  44%`  | ![verdigris](https://github.com/synxty/core/blob/main/callisto/design-tokens/.github/assets/verdigris.svg)     |
| Dodger      | Blue, Info         | `#3793FF` | `55  147 255` | `212° 100% 61%`  | ![dodger](https://github.com/synxty/core/blob/main/callisto/design-tokens/.github/assets/dodger.svg)           |
| Iris        | Violet             | `#5B52C0` | `91  82  192` | `245° 47%  54%`  | ![iris](https://github.com/synxty/core/blob/main/callisto/design-tokens/.github/assets/iris.svg)               |
| Grape       | Purple             | `#7541B4` | `117 65  180` | `267° 47%  48%`  | ![grape](https://github.com/synxty/core/blob/main/callisto/design-tokens/.github/assets/grape.svg)             |
| Mulberry    | Magenta            | `#AF417E` | `175 65  126` | `327° 46%  47%`  | ![mulberry](https://github.com/synxty/core/blob/main/callisto/design-tokens/.github/assets/mulberry.svg)       |
| White       |                    | `#FFFFFF` | `255 255 255` | `0°   0%   100%` | ![white](https://github.com/synxty/core/blob/main/callisto/design-tokens/.github/assets/white.svg)             |
| Black       |                    | `#000000` | `0   0   0`   | `0°   0%   0%`   | ![black](https://github.com/synxty/core/blob/main/callisto/design-tokens/.github/assets/black.svg)             |

Every `color` can be tinted or shaded 9 times, except for `black` and `white` that can be tinted or shaded 12 times respectively to get tones of grays.

### Usage

After installing the package you can either consume it directly through its API or configure it to work with tailwind, replacing (recommended) or extending the palette in your configuration.

#### API

Using a color:

```typescript
import { colors } from '@synxty/design-tokens/colors';

const { jasmine } = colors;

console.log(jasmine.DEFAULT); // #FCE393
console.log(jasmine.tint[10]); // #FCE69E
console.log(jasmine.shade[10]); // #E3CC84
```

Using a color alias:

```typescript
import { aliases } from '@synxty/design-tokens/colors';

const { primary, yellow } = aliases;

console.log(primary.DEFAULT); // #FCE393
console.log(primary.tint[10]); // #FCE69E
console.log(primary.shade[10]); // #E3CC84

console.log(yellow.DEFAULT); // #FCE393
console.log(yellow.tint[10]); // #FCE69E
console.log(yellow.shade[10]); // #E3CC84
```

#### Tailwind

Replacing tailwinds color palette (recommended):

```javascript
// tailwind.config.js

const { colors, aliases } = require('@synxty/design-tokens/colors');

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...colors,
      ...aliases,
    },
  },
};
```

Extending tailwinds color palette:

```javascript
// tailwind.config.js

const { colors, aliases } = require('@synxty/design-tokens/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        ...colors,
        ...aliases,
      },
    },
  },
};
```

Usage examples:

```html
<!-- color -->
<div class="bg-jasmine"></div>
<div class="bg-jasmine-tint-10"></div>
<div class="bg-jasmine-shade-10"></div>

<!-- aliases -->
<div class="bg-primary"></div>
<div class="bg-primary-tint-10"></div>
<div class="bg-primary-shade-10"></div>

<div class="bg-yellow"></div>
<div class="bg-yellow-tint-10"></div>
<div class="bg-yellow-shade-10"></div>
```

## ⚖️ License

This package is open source software [licensed as MIT](LICENSE).

---

Thank you, made with 💗 by [&copy; Synxty](https://github.com/synxty).
