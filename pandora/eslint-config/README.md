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

- eslint:recommended
- @typescript-eslint/recommended
- @typescript-eslint/recommended-requiring-type-checking

Additionally, make sure to add `ignorePatterns` based on your project's specific distribution code directory. Add any directory paths that contain generated or transpiled files, such as "lib" or "dist. This will prevent ESLint from linting those files and focus only on your source code.

## ⚖️ License

This package is open source software [licensed as MIT](LICENSE).

---

Thank you, made with 💗 by [&copy; Synxty](https://github.com/synxty).
