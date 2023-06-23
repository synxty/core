import { DOMParser } from '@xmldom/xmldom';
import { SynxtyIcon } from '@synxty/brand-assets';
import sharp from 'sharp';
import {
  addBackgroundToSVG,
  createBackground,
  createIconDocument,
  createSVGElement,
  generateFilename,
  saveSVGToPNGFile,
} from './index.ts';
import { TEST_RESULT_APP_NAME } from 'constants/index.ts';
import { PNGSpecs } from 'types/index.ts';

describe('> Create an icon document from an svg string', () => {
  it('should create a document given a valid SVG icon as a string', () => {
    const doc = createIconDocument(SynxtyIcon);
    expect(doc.ELEMENT_NODE).toBe(1);
  });
  it('should fail to create a document given an invalid SVG icon as string', () => {
    expect(() => createIconDocument('invalid_string')).toThrow('Not an SVG Icon');
  });
});

describe('> Create an SVG element', () => {
  it('should create an SVG element given a document', () => {
    const doc = createIconDocument(SynxtyIcon);
    const svg = createSVGElement(doc);
    expect(svg.toString().startsWith('<svg')).toBeTruthy();
  });
  it('should fail when the document does not contain an svg tag', () => {
    const documentWithoutSVG = new DOMParser().parseFromString(
      '<div>This is a div</div>',
      'text/xml',
    );
    expect(() => createSVGElement(documentWithoutSVG)).toThrow('Not an SVG Icon');
  });
});

describe('> Create background', () => {
  it('should create a background', () => {
    const doc = createIconDocument(SynxtyIcon);
    const background = createBackground(doc, TEST_RESULT_APP_NAME, 'dark');
    expect(background.toString().startsWith('<rect')).toBeTruthy();
  });
});

describe('> Add background to SVG', () => {
  it('should add a given background to a given SVG Element', () => {
    const doc = createIconDocument(SynxtyIcon);
    const svg = createSVGElement(doc);
    const background = createBackground(doc, TEST_RESULT_APP_NAME, 'dark');
    const svgWithBackground = addBackgroundToSVG(background, svg);
    expect(svgWithBackground.toString().includes('<rect')).toBeTruthy();
  });
});

describe('> Save SVG to PNG file', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should save an SVG element to a PNG File', async () => {
    const doc = createIconDocument(SynxtyIcon);
    const svg = createSVGElement(doc);
    await saveSVGToPNGFile(
      svg,
      {
        outputFilename: 'test',
        appName: TEST_RESULT_APP_NAME,
        theme: 'dark',
      },
      __dirname,
    );

    expect(sharp().toFile).toHaveBeenCalled();
  });

  it("should default to '.' when an output directory is not specified", async () => {
    const doc = createIconDocument(SynxtyIcon);
    const svg = createSVGElement(doc);
    await saveSVGToPNGFile(svg, {
      outputFilename: 'test',
      appName: TEST_RESULT_APP_NAME,
      theme: 'dark',
    });
    expect(sharp().toFile).toHaveBeenCalled();
  });
});

describe('> Should generate a filename based on the given specs', () => {
  const specs: PNGSpecs = {
    appName: 'vscode',
    outputFilename: 'test',
    theme: 'dark',
  };

  it('should create a filename with added suffixes', () => {
    const filename = generateFilename(specs);
    expect(filename).toBe('test-vscode-dark');
  });

  it('should create a filename without any added suffixes', () => {
    const testSpecs: PNGSpecs = {
      ...specs,
      outputFilename: {
        filename: 'test',
      },
    };
    const filename = generateFilename(testSpecs);
    expect(filename).toBe('test');
  });

  it('should create a file with only the specified suffixes', () => {
    const testSpecs: PNGSpecs = {
      ...specs,
      outputFilename: {
        filename: 'test',
        addSuffixes: ['appName'],
      },
    };
    const filename = generateFilename(testSpecs);
    expect(filename).toBe('test-vscode');
  });
});
