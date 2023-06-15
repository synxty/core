#!/bin/bash

echo '> Importing icons from Figma...'
pnpm tsx -r dotenv/config ./node_modules/@figma-export/cli/dist/run.js use-config src/generate-assets/figma-import

echo '> Generating the source file to build the library...'
pnpm tsx src/generate-assets/generate

echo '> Building...'
pnpm tsup

echo '> Clean up'
rm -rf src/generate-assets/figma-assets && rm src/generate-assets/index.ts
