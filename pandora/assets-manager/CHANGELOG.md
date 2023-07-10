# @synxty/assets-manager

## 3.0.3

### Patch Changes

- Updated dependencies [0a338f4]
  - @synxty/brand-assets@2.0.0

## 3.0.2

### Patch Changes

- 384f703: Updated README
  - @synxty/brand-assets@1.1.2

## 3.0.1

### Patch Changes

- 6386cec: Bundle size reduced by publishing only the lib
- Updated dependencies [6386cec]
  - @synxty/brand-assets@1.1.2

## 3.0.0

### Major Changes

- a84ea69: The PNGSpecs interface has been updated! Here's what you have to change:

  - ~~outputName~~ &rarr; outputFilename

## 2.1.0

### Minor Changes

- 4d428ef: Added feature that allows users to select which and if suffixes should be added to the filename

## 2.0.1

### Patch Changes

- Updated dependencies [d2dd0bd]
  - @synxty/brand-assets@1.1.1

## 2.0.0

### Major Changes

- 64f38a2:
  - Removed dependency on deprecated package @synxty/platforms-assets-config.
  - Removed a feature to convert a svg file to png.
  - Refactored methods and interfaces names to better reflect package features:
    - <del>PNGSettings</del> &rarr; PNGSpecs
    - <del>convertIconStringToPNG</del> &rarr; convertIconToPNG
    - <del>convertIconFileToPNG</del>

## 1.0.1

### Patch Changes

- e4f2592: Update brand-assets dependency resolving to the new migrated brand-assets package.

## 1.0.0

### Major Changes

- 67b8636: First major release. Migrate to @synxty/core.
