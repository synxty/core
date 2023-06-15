#!/bin/bash

echo '> Generating VS Code Marketplace package name...'
pnpm tsx scripts/ajust-package-name.ts 'eden-vscode'

echo '> Packing extension...'
pnpm vsce package --no-dependencies

echo '> Publishing extension...'
pnpm vsce publish --no-dependencies

echo "> Restoring registry's package name..."
pnpm tsx scripts/ajust-package-name.ts '@synxty/eden-vscode'
