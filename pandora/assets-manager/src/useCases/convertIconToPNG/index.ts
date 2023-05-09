import { PNGSpecs, addBackgroundToSVG, createBackground, createIconDocument, createSVGElement, saveSVGToPNGFile } from '../../common/utils';

export async function convertIconToPNG(svgIcon: string, specs: PNGSpecs, outDir?: string) {
  const { appName, theme } = specs;
  const iconDocument = createIconDocument(svgIcon);
  const svgElement = createSVGElement(iconDocument);
  const background = createBackground(iconDocument, appName, theme);
  const svgWithBackground = addBackgroundToSVG(background, svgElement);
  
  await saveSVGToPNGFile(svgWithBackground, specs, outDir);
}
