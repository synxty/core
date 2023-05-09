import { PNGSettings, addBackgroundToSVG, createBackground, createIconDocumentFromString, createSVGElement, saveSVGToPNGFile } from '../../common/utils';

export async function convertIconStringToPNG(iconString: string, settings: PNGSettings, outDir?: string) {
  const { app, theme } = settings;
  const iconDocument = createIconDocumentFromString(iconString);
  const svgElement = createSVGElement(iconDocument);
  const background = createBackground(iconDocument, app, theme);
  const svgWithBackground = addBackgroundToSVG(background, svgElement);
  
  await saveSVGToPNGFile(svgWithBackground, settings, outDir);
}
