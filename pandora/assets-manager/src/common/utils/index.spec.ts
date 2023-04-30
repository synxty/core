import { describe, it, expect, afterAll } from 'vitest';
import { DOMParser } from '@xmldom/xmldom';
import { SynxtyIcon } from '@synxty/brand-assets';
import { addBackgroundToSVG, createBackground, createIconDocumentFromPath, createIconDocumentFromString, createSVGElement, saveSVGToPNGFile } from '.';
import { statSync, unlinkSync } from 'fs';

const SAMPLE_ICON_PATH = 'samples/SynxtyIcon.svg';

describe('> Create an icon document from path', () => {
  it('should create a document given a valid path', () => {
    const document = createIconDocumentFromPath(SAMPLE_ICON_PATH);
    expect(document.ELEMENT_NODE).toBe(1);
  });
  it('should fail to create a document given an invalid path', () => {
    expect(() => createIconDocumentFromPath('invalid/path')).toThrow(/^ENOENT.*/g)
  });
});

describe('> Create an icon document from a string', () => {
  it('should create a document given a valid SVG icon as string', () => {
    const doc = createIconDocumentFromString(SynxtyIcon);
    expect(doc.ELEMENT_NODE).toBe(1);
  });
  it('should fail to create a document given an invalid SVG icon as string', () => {
    expect(() => createIconDocumentFromString('invalid_string')).toThrow('Not an SVG Icon');
  });
});

describe('> Create an SVG element', () => {
  it('should create an SVG element given a document', () => {
    const document = createIconDocumentFromPath(SAMPLE_ICON_PATH);
    const svg = createSVGElement(document);
    expect(svg.toString().startsWith('<svg')).toBeTruthy();
  });
  it("should fail when the document does not contain an svg tag", () => {
    const documentWithoutSVG = new DOMParser().parseFromString(
      '<div>This is a div</div>',
      'text/xml'
    );
    expect(() => createSVGElement(documentWithoutSVG)).toThrow('Not an SVG Icon');
  });
});

describe('> Create background', () => {
  it('should create a background', () => {
    const doc = createIconDocumentFromPath(SAMPLE_ICON_PATH);
    const background = createBackground(doc, 'github-profile', 'dark');
    expect(background.toString().startsWith('<rect')).toBeTruthy();
  });
});

describe('> Add background to SVG', () => {
  it('should add a given background to a given SVG Element', () => {
    const doc = createIconDocumentFromPath(SAMPLE_ICON_PATH);
    const svg = createSVGElement(doc);
    const background = createBackground(doc, 'github-profile', 'dark');
    const svgWithBackground = addBackgroundToSVG(background, svg);
    expect(svgWithBackground.toString().includes('<rect')).toBeTruthy();
  });
});

describe('> Save SVG to PNG file', () => {
  it('should save an SVG element to a PNG File', async () => {
    const doc = createIconDocumentFromPath(SAMPLE_ICON_PATH);
    const svg = createSVGElement(doc);
    await saveSVGToPNGFile(svg, 
    {
      outputName: 'test',
      platform: 'github-profile',
      theme: 'dark',
    },
    __dirname
    );
    expect(statSync(`${__dirname}/test-github-profile-dark.png`)).toBeDefined();
  });
  it("should default to '.' when an output directory is not specified", async () => {
    const doc = createIconDocumentFromPath(SAMPLE_ICON_PATH);
    const svg = createSVGElement(doc);
    await saveSVGToPNGFile(svg, {
      outputName: 'test',
      platform: 'github-profile',
      theme: 'dark',
    });
    expect(statSync('./test-github-profile-dark.png')).toBeDefined();
  });

  afterAll(() => {
    unlinkSync(`${__dirname}/test-github-profile-dark.png`);
    unlinkSync('./test-github-profile-dark.png');
  });
  
});
