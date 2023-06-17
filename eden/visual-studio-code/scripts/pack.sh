#!/bin/bash

echo '> Generating Theme Icon...'
pnpm tsx src/utils/generateThemeIcon.ts

echo '> Generating VS Code Marketplace package name..'
pnpm tsx src/utils/changePackageName.ts 'eden-vscode'

echo '> Packing extension...'
pnpm vsce package --no-dependencies
