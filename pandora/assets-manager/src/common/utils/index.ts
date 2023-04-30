import { readFileSync } from 'fs';
import { DOMParser, XMLSerializer } from '@xmldom/xmldom';
import sharp from 'sharp';
import { PlatformIconProps, Platforms, Themes, platformsIconsConfig, themesConfig } from '@synxty/platforms-assets-config';

export interface PNGSettings {
  outputName: string;
  platform: Platforms;
  theme: Themes;
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
  platform: Platforms,
  theme: Themes
): HTMLElement {
  const size = getSize(platform);
  const radius = getRadius(platform);
  const backgroundColor = getBackgroundColor(theme);

  const background = iconDocument.createElement('rect');
  background.setAttribute('fill', backgroundColor);
  background.setAttribute('width', size.toString());
  background.setAttribute('height', size.toString());
  background.setAttribute('rx', radius);
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
  const { outputName, platform, theme } = settings;
  const outputFilePath = `${outDir}/${outputName}-${platform}-${theme}.png`;

  const imageBuffer = Buffer.from(new XMLSerializer().serializeToString(svg))
  const image = sharp(imageBuffer);
  await image.toFile(outputFilePath);
};

function getSize(platform: Platforms): number {
  const size = platformsIconsConfig[platform].size;
  return size;
};

function getRadius(platform: Platforms): string {
  const iconProps: PlatformIconProps = platformsIconsConfig[platform];
  return iconProps.radius || '0%';
};

function getBackgroundColor(theme: Themes): string {
  const backgroundColor = themesConfig[theme].backgroundColor;
  return backgroundColor;
};
