import { DOMParser, XMLSerializer } from '@xmldom/xmldom';
import sharp from 'sharp';
import {  SupportedApps, SupportedThemes, getProfileIconSpecs, getThemeConfig } from '@synxty/brand-assets/apps-specs';

export interface PNGSpecs {
  outputName: string;
  appName: SupportedApps;
  theme: SupportedThemes;
};

export function createIconDocument(svgString: string): Document {
  if (!svgString.startsWith('<svg') || !svgString.endsWith('</svg>')) throw Error('Not an SVG Icon');
  const iconDocument = new DOMParser().parseFromString(svgString, 'text/xml');
  return iconDocument;
}

export function createSVGElement(iconDocument: Document): SVGSVGElement {
  const svgElement = iconDocument.getElementsByTagName('svg').item(0);
  if (!svgElement) throw Error('Not an SVG Icon');
  return svgElement;
};

export function createBackground(
  iconDocument: Document,
  appName: SupportedApps,
  theme: SupportedThemes
): HTMLElement {
  const { size, radius } = getProfileIconSpecs(appName);
  const { backgroundColor } = getThemeConfig(theme);

  const background = iconDocument.createElement('rect');
  background.setAttribute('fill', backgroundColor);
  background.setAttribute('width', size.toString());
  background.setAttribute('height', size.toString());
  background.setAttribute('rx', radius ? radius.toString() : '0%');
  return background;
};

export function addBackgroundToSVG(
  background: HTMLElement,
  svgElement: SVGSVGElement
): SVGSVGElement {
  const svgPath = svgElement.getElementsByTagName('path').item(0);
  svgElement.insertBefore(background, svgPath);
  return svgElement;
};

export async function saveSVGToPNGFile(
  svg: SVGSVGElement,
  specs: PNGSpecs,
  outDir: string = '.',
): Promise<void> {
  const { outputName, appName, theme } = specs;
  const outputFilePath = `${outDir}/${outputName}-${appName}-${theme}.png`;

  const imageBuffer = Buffer.from(new XMLSerializer().serializeToString(svg))
  const image = sharp(imageBuffer);
  await image.toFile(outputFilePath);
};
