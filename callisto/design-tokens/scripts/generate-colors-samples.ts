import { writeFileSync } from 'node:fs';
import { colors } from '../src';
import { Color, NeutralColor } from '../src/types/colors';

const outDir = '.github/assets';

function getSVGSample (color: Color | NeutralColor) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20px" height="20px" style="background-color: ${color.DEFAULT};"></svg>  
  `;
};

for (const [colorName, color] of Object.entries(colors)){
  const svgSample = getSVGSample(color);
  writeFileSync(`${outDir}/${colorName}.svg`, svgSample);
}
