import { PNGSettings, addBackgroundToSVG, createBackground, createIconDocumentFromPath, createSVGElement, saveSVGToPNGFile } from '../../common/utils';

export async function convertIconFileToPNG(iconPath: string, settings: PNGSettings, outDir?: string) {
  const { platform, theme } = settings;
  const iconDocument = createIconDocumentFromPath(iconPath);
  const svgElement = createSVGElement(iconDocument);
  const background = createBackground(iconDocument, platform, theme);
  const svgWithBackground = addBackgroundToSVG(background, svgElement);
  
  await saveSVGToPNGFile(svgWithBackground, settings, outDir);
}
