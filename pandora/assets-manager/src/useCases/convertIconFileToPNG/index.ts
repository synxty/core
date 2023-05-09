import { PNGSpecs, addBackgroundToSVG, createBackground, createIconDocumentFromPath, createSVGElement, saveSVGToPNGFile } from '../../common/utils';

export async function convertIconFileToPNG(iconPath: string, specs: PNGSpecs, outDir?: string) {
  const { appName, theme } = specs;
  const iconDocument = createIconDocumentFromPath(iconPath);
  const svgElement = createSVGElement(iconDocument);
  const background = createBackground(iconDocument, appName, theme);
  const svgWithBackground = addBackgroundToSVG(background, svgElement);
  
  await saveSVGToPNGFile(svgWithBackground, specs, outDir);
}
