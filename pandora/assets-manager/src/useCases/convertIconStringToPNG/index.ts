import { PNGSpecs, addBackgroundToSVG, createBackground, createIconDocumentFromString, createSVGElement, saveSVGToPNGFile } from '../../common/utils';

export async function convertIconStringToPNG(iconString: string, specs: PNGSpecs, outDir?: string) {
  const { appName, theme } = specs;
  const iconDocument = createIconDocumentFromString(iconString);
  const svgElement = createSVGElement(iconDocument);
  const background = createBackground(iconDocument, appName, theme);
  const svgWithBackground = addBackgroundToSVG(background, svgElement);
  
  await saveSVGToPNGFile(svgWithBackground, specs, outDir);
}
