#!/bin/bash

echo "> Restoring registry's package name..."
pnpm tsx src/utils/changePackageName.ts '@synxty/eden-vscode'
