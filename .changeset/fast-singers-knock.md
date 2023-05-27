---
"@synxty/assets-manager": major
---

- Removed dependency on deprecated package @synxty/platforms-assets-config.
- Removed a feature to convert a svg file to png.
- Refactored methods and interfaces names to better reflect package features:
  
  - <del>PNGSettings</del> &rarr; PNGSpecs
  - <del>convertIconStringToPNG</del> &rarr; convertIconToPNG
  - <del>convertIconFileToPNG</del>
