#!/bin/bash

echo '> Publishing extension...'
pnpm vsce publish --no-dependencies --pre-release
