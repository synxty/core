import { readFileSync } from 'fs';
import { DOMParser, XMLSerializer } from '@xmldom/xmldom';
import sharp from 'sharp';
import {  SupportedApps, SupportedThemes, getProfileIconSpecs, getThemeConfig } from '@synxty/brand-assets/apps-specs';

export interface PNGSettings {
  outputName: string;
  app: SupportedApps;
  theme: SupportedThemes;
};

export function createIconDocumentFromPath(path: string): Document {
  const fileData = readFileSync(path).toString();
  const iconDocument = new DOMParser().parseFromString(fileData, 'text/xml');
  return iconDocument;
}

export function createIconDocumentFromString(iconString: string): Document {
  if (!iconString.startsWith('<svg') || !iconString.endsWith('</svg>')) throw Error('Not an SVG Icon');
  const iconDocument = new DOMParser().parseFromString(iconString, 'text/xml');
  return iconDocument;
}

export function createSVGElement(iconDocument: Document): SVGSVGElement {
  const svgElement = iconDocument.getElementsByTagName('svg').item(0);
  if (!svgElement) throw Error('Not an SVG Icon');
  return svgElement;
};

export function createBackground(
  iconDocument: Document,
  app: SupportedApps,
  theme: SupportedThemes
): HTMLElement {
  const { size, radius } = getProfileIconSpecs(app);
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
  settings: PNGSettings,
  outDir: string = '.',
): Promise<void> {
  const { outputName, app, theme } = settings;
  const outputFilePath = `${outDir}/${outputName}-${app}-${theme}.png`;

  const imageBuffer = Buffer.from(new XMLSerializer().serializeToString(svg))
  const image = sharp(imageBuffer);
  await image.toFile(outputFilePath);
};
