# ES Lint Config

> Add linting to your project easily with Synxty's ES Lint Config package.

## ⚙️ Install

```bash
pnpm add @synxty/eslint-config -D
```

## 📝 Setup

### Typescript base

To add linting in your package just create a file in the root of the project named `.eslintrc` and paste the following:

```json
{
  "root": true,
  "extends": "@synxty/eslint-config/base.json"
}
```

This config includes:

- [eslint:recommended](https://eslint.org/docs/latest/rules/)
- [@typescript-eslint/recommended](https://typescript-eslint.io/rules/)
- [@typescript-eslint/recommended-requiring-type-checking](https://typescript-eslint.io/linting/configs#recommended-requiring-type-checking)

Additionally, make sure to add `ignorePatterns` based on your project's specific distribution code directory. Add any directory paths that contain generated or transpiled files, such as "lib" or "dist. This will prevent ESLint from linting those files and focus only on your source code.

### Enable linting on CI

In order to enable linting on CI or if you want to easily lint your code from the terminal, add the following script to your `package.json` :

```json
"lint": "eslint . --fix",
```

## ⚖️ License

This package is open source software [licensed as MIT](LICENSE).

---

Thank you, made with 💗 by [&copy; Synxty](https://github.com/synxty).
