echo '> Importing icons from Figma...'
pnpm tsx -r dotenv/config ./node_modules/@figma-export/cli/dist/run.js use-config src/importIconsFromFigma

echo '> Generating the source file to build the library...'
pnpm tsx src/generateIconsSource 

echo '> Building...'
pnpm tsup

echo '> Clean up'
rm -rf src/icons
