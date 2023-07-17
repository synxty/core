import { aliases, colors } from '@synxty/design-tokens';
import { DEBUGGING, TESTING } from 'constants/index.ts';
import { SymbolIconsColors } from 'types/index.ts';

const { black, white } = colors;
const { primary, orange, violet, magenta, blue, teal } = aliases;

export const symbolIconsColors: SymbolIconsColors = {
  'symbolIcon.arrayForeground': white.shade[10],
  'symbolIcon.booleanForeground': white.shade[10],
  'symbolIcon.classForeground': orange.DEFAULT,
  'symbolIcon.colorForeground': TESTING,
  'symbolIcon.constantForeground': TESTING,
  'symbolIcon.constructorForeground': magenta.DEFAULT,
  'symbolIcon.enumeratorForeground': orange.DEFAULT,
  'symbolIcon.enumeratorMemberForeground': TESTING,
  'symbolIcon.eventForeground': TESTING,
  'symbolIcon.fieldForeground': blue.DEFAULT,
  'symbolIcon.fileForeground': TESTING,
  'symbolIcon.folderForeground': TESTING,
  'symbolIcon.functionForeground': magenta.DEFAULT,
  'symbolIcon.interfaceForeground': blue.DEFAULT,
  'symbolIcon.keyForeground': TESTING,
  'symbolIcon.keywordForeground': white.shade[10],
  'symbolIcon.methodForeground': magenta.DEFAULT,
  'symbolIcon.moduleForeground': white.shade[10],
  'symbolIcon.namespaceForeground': TESTING,
  'symbolIcon.nullForeground': TESTING,
  'symbolIcon.numberForeground': white.shade[10],
  'symbolIcon.objectForeground': TESTING,
  'symbolIcon.operatorForeground': TESTING,
  'symbolIcon.packageForeground': TESTING,
  'symbolIcon.propertyForeground': white.shade[10],
  'symbolIcon.referenceForeground': TESTING,
  'symbolIcon.snippetForeground': white.shade[10],
  'symbolIcon.stringForeground': white.shade[10],
  'symbolIcon.structForeground': TESTING,
  'symbolIcon.textForeground': white.shade[10],
  'symbolIcon.typeParameterForeground': TESTING,
  'symbolIcon.unitForeground': TESTING,
  'symbolIcon.variableForeground': blue.DEFAULT,
};
