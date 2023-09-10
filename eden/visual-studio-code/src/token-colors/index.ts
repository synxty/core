import { TokenColors } from 'types/TokenColors/index.ts';
import { aliases, colors } from '@synxty/design-tokens/colors';
import { DEBUGGING, TESTING } from 'constants/index.ts';

const { black, white } = colors;
const { blue, red, amber, chartreuse, vermilion, yellow, green } = aliases;

const tokenColors: TokenColors = [
  {
    scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
    settings: {
      foreground: black.tint[90],
    },
  },
  {
    scope: ['variable', 'variable.other'],
    settings: {
      foreground: white.shade[10],
    },
  },
  {
    scope: [
      'constant',
      'entity.name.constant',
      'variable.other.constant',
      'variable.other.enummember',
      'variable.other.object',
      'variable.language',
    ],
    settings: {
      foreground: yellow.DEFAULT,
      fontStyle: 'italic',
    },
  },
  {
    scope: ['entity', 'entity.name'],
    settings: {
      foreground: green.tint[40],
      fontStyle: 'italic',
    },
  },
  {
    scope: 'variable.parameter.function',
    settings: {
      foreground: white.shade[10],
    },
  },
  {
    scope: 'entity.name.tag',
    settings: {
      foreground: chartreuse.DEFAULT,
    },
  },
  {
    scope: 'keyword',
    settings: {
      foreground: amber.DEFAULT,
    },
  },
  {
    scope: 'keyword.other.important',
    settings: {
      foreground: red.DEFAULT,
    },
  },
  {
    scope: ['storage', 'storage.type'],
    settings: {
      foreground: amber.DEFAULT,
    },
  },
  {
    scope: ['storage.modifier.package', 'storage.modifier.import', 'storage.type.java'],
    settings: {
      foreground: white.shade[10],
    },
  },
  {
    scope: [
      'string',
      'punctuation.definition.string',
      'string punctuation.section.embedded source',
    ],
    settings: {
      foreground: vermilion.tint[40],
    },
  },
  {
    scope: 'support.type',
    settings: {
      foreground: blue.tint[40],
    },
  },
  {
    scope: 'support',
    settings: {
      foreground: yellow.DEFAULT,
    },
  },
  {
    scope: 'meta.property-name',
    settings: {
      foreground: DEBUGGING,
    },
  },
  {
    scope: ['invalid.broken', 'invalid.deprecated', 'invalid.illegal', 'invalid.unimplemented'],
    settings: {
      foreground: TESTING,
    },
  },
  {
    scope: 'carriage-return',
    settings: {
      fontStyle: 'italic underline',
      background: amber.DEFAULT,
      foreground: black.tint[10],
      content: '^M',
    },
  },
  {
    scope: 'message.error',
    settings: {
      foreground: TESTING,
    },
  },
  {
    scope: 'string variable',
    settings: {
      foreground: DEBUGGING,
    },
  },
  {
    scope: ['source.regexp', 'string.regexp'],
    settings: {
      foreground: blue.tint[40],
    },
  },
  {
    scope: [
      'string.regexp.character-class',
      'string.regexp constant.character.escape',
      'string.regexp source.ruby.embedded',
      'string.regexp string.regexp.arbitrary-repitition',
    ],
    settings: {
      foreground: blue.tint[40],
    },
  },
  {
    scope: 'string.regexp constant.character.escape',
    settings: {
      foreground: green.tint[40],
      fontStyle: 'bold',
    },
  },
  {
    scope: 'support.constant',
    settings: {
      foreground: yellow.DEFAULT,
    },
  },
  {
    scope: 'support.variable',
    settings: {
      foreground: white.shade[10],
    },
  },
  {
    scope: 'meta.module-reference',
    settings: {
      foreground: TESTING,
    },
  },
  {
    scope: 'punctuation.definition.list.begin.markdown',
    settings: {
      foreground: amber.DEFAULT,
    },
  },
  {
    scope: ['markup.heading', 'markup.heading entity.name'],
    settings: {
      foreground: amber.DEFAULT,
      fontStyle: 'bold',
    },
  },
  {
    scope: 'markup.quote',
    settings: {
      foreground: green.tint[40],
    },
  },
  {
    scope: 'markup.italic',
    settings: {
      foreground: blue.tint[40],
      fontStyle: 'italic',
    },
  },
  {
    scope: 'markup.bold',
    settings: {
      foreground: blue.tint[40],
      fontStyle: 'bold',
    },
  },
  {
    scope: 'markup.underline',
    settings: {
      fontStyle: 'underline',
    },
  },
  {
    scope: 'markup.strikethrough',
    settings: {
      fontStyle: 'strikethrough',
      foreground: blue.tint[40],
    },
  },
  {
    scope: 'markup.inline.raw',
    settings: {
      foreground: vermilion.tint[40],
    },
  },
  {
    scope: ['markup.deleted', 'meta.diff.header.from-file', 'punctuation.definition.deleted'],
    settings: {
      background: TESTING,
      foreground: TESTING,
    },
  },
  {
    scope: ['markup.inserted', 'meta.diff.header.to-file', 'punctuation.definition.inserted'],
    settings: {
      background: TESTING,
      foreground: TESTING,
    },
  },
  {
    scope: ['markup.changed', 'punctuation.definition.changed'],
    settings: {
      background: TESTING,
      foreground: TESTING,
    },
  },
  {
    scope: ['markup.ignored', 'markup.untracked'],
    settings: {
      background: TESTING,
      foreground: TESTING,
    },
  },
  {
    scope: 'meta.diff.range',
    settings: {
      foreground: TESTING,
      fontStyle: 'bold',
    },
  },
  {
    scope: 'meta.diff.header',
    settings: {
      foreground: TESTING,
    },
  },
  {
    scope: 'meta.separator',
    settings: {
      fontStyle: 'bold',
      foreground: black.tint[90],
    },
  },
  {
    scope: 'meta.output',
    settings: {
      foreground: TESTING,
    },
  },
  {
    scope: ['constant.other.reference.link', 'string.other.link'],
    settings: {
      foreground: blue.DEFAULT,
      fontStyle: 'underline',
    },
  },
];

export default tokenColors;
