import { PNGSettings, addBackgroundToSVG, createBackground, createIconDocumentFromString, createSVGElement, saveSVGToPNGFile } from '../../common/utils';

export async function convertIconStringToPNG(iconString: string, settings: PNGSettings, outDir?: string) {
  const { platform, theme } = settings;
  const iconDocument = createIconDocumentFromString(iconString);
  const svgElement = createSVGElement(iconDocument);
  const background = createBackground(iconDocument, platform, theme);
  const svgWithBackground = addBackgroundToSVG(background, svgElement);
  
  await saveSVGToPNGFile(svgWithBackground, settings, outDir);
}
