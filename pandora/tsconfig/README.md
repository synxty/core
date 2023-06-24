# TS Config

> Add a tsconfig file to your project easily with Synxty's TS Config package.

## ⚙️ Install

```bash
pnpm add @synxty/tsconfig -D
```

## 📝 Setup

### Typescript base

Make sure you have a tsconfig.json file in the root of your package. Paste or adjust the following in your file:

```json
{
  "extends": "@synxty/tsconfig/base.json",
  "compilerOptions": {},
  "exclude": []
}
```

If you need to add additional compiler options, or exclude your transpiled code directories feel free to do it 🙂

## ⚖️ License

This package is open source software [licensed as MIT](LICENSE).

---

Thank you, made with 💗 by [&copy; Synxty](https://github.com/synxty).
